window.onload = function () {
  const ui = SwaggerUIBundle({
    dom_id: '#swagger-ui',
    urls: [
      { name: 'OnPage Public API', url: 'specs/OnPage Public API.yaml' },
      { name: 'BlastIT Public API', url: 'specs/BlastIT Public API.yaml' },
    ],
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
};
