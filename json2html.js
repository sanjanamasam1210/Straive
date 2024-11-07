
// json2html.js
export default function json2html(data) {
  // Extract headers from the first object keys
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Start building the HTML table string
  let html = `<table data-user="sanjanamasam1210@gmail.com">\n  <thead>\n    <tr>`;
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr>\n  </thead>\n  <tbody>`;

  // Populate rows
  data.forEach(item => {
    html += `\n    <tr>`;
    headers.forEach(header => {
      html += `<td>${item[header] || ""}</td>`;
    });
    html += `</tr>`;
  });
  html += `\n  </tbody>\n</table>`;

  return html;
}
