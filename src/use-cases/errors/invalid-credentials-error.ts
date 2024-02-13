export class InvalidCredenctialsError extends Error {
  constructor() {
    super("Invalid credentials.");
  }
}
