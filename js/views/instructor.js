function instructorTemplate(data) {

  return`
    <ul class="instructor">
      <button class="back-button" data-to="contacts">
        <i class+'fa fa-arrow-left'></i>
      </button>
      <li class="photo">${data.Photo}</li>
      <li><i class='fa fa-user'></i>  ${data.Name}</li>
      <li><i class='fa fa-envelope'></i>  ${data.Email}</li>
      <li><i class='fa fa-phone-square'></i>  ${data.Phone}</li>
      <li><i class='fa fa-globe'></i>  ${data.Location}</li>
    </ul>
  `
}

export default instructorTemplate;