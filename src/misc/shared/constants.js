//!DO NOT MODIFY
export const JWT_AUTH_EXPIRATION = "jwtAuthExpiration";
export const REFRESH_TOKEN = "refreshToken";
export const AUTH_TOKEN = "authToken";

//Your code below
/**
 * Queries
 */
export const getLoginMutation = (login, password) => {
  return `
    mutation LoginUser{
      login(
        input: {
          clientMutationId: ""
          username: "${login}"
          password: "${password}"
        }
      ) {
        ${AUTH_TOKEN}
        ${REFRESH_TOKEN}
        user {
            ${JWT_AUTH_EXPIRATION}
        }
      }
    }
  `;
};

export const getRefreshMutation = () => {
  return `
    mutation RefreshToken {
      refreshJwtAuthToken(
        input: { clientMutationId: "", jwtRefreshToken: "${localStorage.getItem(
          REFRESH_TOKEN
        )}" }
      ) {
        ${AUTH_TOKEN}
      }
    }
  `;
};
