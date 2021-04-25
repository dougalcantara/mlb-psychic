export default function Login() {
  return (
    <form>
      <label htmlFor="email">Email Address:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}
