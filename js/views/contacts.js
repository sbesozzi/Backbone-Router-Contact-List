function processData(data) {
  return data.map(function(item) {
    return`
      console.log(processData);
      <li class='contact-list-item' data-contact-list-id="${item.objectId}">${item.Name}</li>
      `;

  }).join('');
}

function contactsTemplate(data) {
  return `
    <h1>Contact List</h1>
    <ul>${processData(data)}</ul>
  `;
}

export default contactsTemplate