function processData(data) {
  return data.map(function(item) {
    return`
      <li class="instructor-list-item" data-instructor-id="${item.objectId}">
      <span>${item.Name}</span>
      </li>
      `;
  // Join array with empty string
  }).join('');
}

function contactsTemplate(data) {
  return `
    <div class="contacts-list">
      <h3>Contact List</h3>
      <ul>${processData(data)}</ul>
    </div>
  `;
}

export default contactsTemplate