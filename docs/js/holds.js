const tableBody = document.querySelector('.nypl-holds-table tbody');

const itemHold = [
  {
    title: 'British intelligence and Hitler\'s empire in the Soviet Union, 1941-1945 / Benjamin William Wheatley',
    url: 'https://catalog.nypl.org/search~S1?/Xsoviet+union&searchscope=1&SORT=DZ/Xsoviet+union&searchscope=1&SORT=DZ&extended=0&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=1&SORT=DZ&1%2C1%2C',
    author: 'Wheatley, Benjamin William',
    format: 'Book',
    imprint: 'London ; New York, NY : Bloomsbury Academic, an imprint of Bloomsbury Publishing Plc, 2017.',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'In transit from ReCAP',
    statusClass: 'in-transit',
    manageUrl: '#',
  },
];

itemHold.forEach(item => {
  const tableRow = `
    <tr role="row">
      <td>
        <div class="item"><a href="${item.url}">${item.title}</a></div>
        <div>${item.author}</div>
        <div>${item.imprint}</div>
        <div>${item.format}</div>
      </td>
      <td>
        <span class="${item.statusClass}">${item.status}</span>
      </td>
      <td>
        <span><a href="${item.locLink}">${item.location}</a></span>
      </td>
      <td>
        <span><a href="${item.manageUrl}">Manage this item</a></span>
      </td>
    </tr>
  `;

  tableBody.insertAdjacentHTML('beforeend', tableRow);
  console.log(tableBody);
});

// get the number of trs in table
const trItems = document.querySelectorAll('tbody tr').length;
// console.log(trItems);
// update the number printed to item count
// turn the number into a string
// const numberOfItems = trItems.toString();
// console.log(numberOfItems);
const totalNumber = document.getElementById('number-of-holds');
totalNumber.innerHTML = trItems;
