class Post {
  
  create(postData) {
    return cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: postData,
      headers: { "Content-type": "application/json; charset=UTF-8" },
      failOnStatusCode: true,
    });
  }

  getAll() {
    return cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      failOnStatusCode: true,
    });
  }

  getById(postId) {
    return cy.request({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      failOnStatusCode: true,
    });
  }

  updatePost(postId, updatedData) {
    return cy.request({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      body: updatedData,
      headers: { "Content-type": "application/json; charset=UTF-8" },
      failOnStatusCode: true,
    });
  }

  deletePost(postId) {
    return cy.request({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      failOnStatusCode: true,
    });
  }
}

export const post = new Post();
