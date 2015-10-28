function instructorTemplate(data) {
  return`
    <ul>
      <li>${data.Photo}</li>
      <li><i class='fa fa-user'></i>${data.Name}</li>
      <li><i class='fa fa-enevelope'></i>${data.Email}</li>
      <li><i class='fa fa-phone-square'></i>${data.Phone}</li>
      <li><i class='fa fa-globe'></i>${data.Location}</li>
    </ul>
  `;
}

export default instructorTemplate;