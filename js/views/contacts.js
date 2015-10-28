function processData(data) {
  return data.map(function(item) {
    return`
      <li class='contact-list-item' data-contact-list-id="${item.objectId}">${item.Name}</li>
      `;

  }).join('');
}

function contactsTemplate(data) {
  return `
    <h3>Contact List</h3>
    <ul>${processData(data)}</ul>
  `;
}

export default contactsTemplate