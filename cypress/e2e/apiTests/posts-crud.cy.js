import { post } from "../../api/Post";

describe("CRUD operation on item", () => {

  it("Create Post", () => {
    cy.fixture("/apiBody/createPost").then((createBody) => {
      post.create(createBody).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.body).to.have.property("id");
        expect(response.body.title).to.equal(createBody.title);
        expect(response.body.body).to.equal(createBody.body);
        expect(response.body.userId).to.equal(createBody.userId);
      });
    });
  });

  it("Get all posts", () => {
    post.getAll().then((response) => {
      expect(response.status).to.equal(200);

      const hasPost = response.body.some((post) => post.title === "qui est esse");
      expect(hasPost).to.be.true;
    });
  });

  it("Update the post", () => {
    cy.fixture("/apiBody/updatePost").then((updateBody) => {
      post.getById(updateBody.id).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.title).to.equal("qui est esse");
      });
  
      post.updatePost(updateBody.id, updateBody.title).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.title).to.equal(updateBody.title);
      })
    });
  });

  it("Delete the post", () => {
    post.deletePost('2').then((response) => {
      expect(response.status).to.equal(200);
    });
  })
});
