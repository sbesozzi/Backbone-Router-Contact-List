function instructorTemplate(data) {
  return`
    <ul>
      <li>${data.Photo}</li>
      <li>${data.Name}</li>
      <li>${data.Email}</li>
      <li>${data.Phone}</li>
      <li>${data.Location}</li>
    </ul>
  `;
}

export default instructorTemplate;