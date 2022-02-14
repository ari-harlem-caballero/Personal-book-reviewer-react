import { client } from './client';
// getUser, checkAuth, redirectIfLoggedIn, SignUp, SignIn, Logout
export async function getUser() {
  return client.auth.session();
}

export async function checkAuth() {
  const user = await getUser();

  if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
  if (await getUser()) {
    location.replace('./books');
  }
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return window.location.href = '../';
}

// getBooks, getSingleBook(id), createBook, deleteBook(id)
// getReviews, getSingleReview(id), createReview, deleteReview(id), updateReview(id, updatedReview)
// createProfile, getProfile(id), getProfiles
