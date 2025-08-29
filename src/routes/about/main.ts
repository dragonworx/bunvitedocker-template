console.log('About page loaded');

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `
      <div style="font-family: system-ui; max-width: 600px; margin: 2rem auto; padding: 2rem;">
        <h1>About Fantoccini 3D</h1>
        <p>This is a demo showing automatic route discovery!</p>
        <p>Created by simply adding a folder: <code>src/routes/about/main.ts</code></p>
        <p>No configuration needed! 🎉</p>
        <nav>
          <a href="/">← Home</a> |
          <a href="/dashboard">Dashboard</a> |
          <a href="/api-docs">API Docs</a>
        </nav>
      </div>
    `;
  }
});