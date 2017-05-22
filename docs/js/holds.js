// This File provides some helper fuctions that supplies mock data and
// does a little work fo us so we can update our mock data freely without having
// to update the number of holds shown in the example.

// Mock data; mimics an API response.

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
    statusClass: 'in-transit recap',
    manageUrl: '#',
  },
  {
    title: 'Protest, reform and repression in Khrushchev\'s Soviet Union / Robert Hornsby',
    url: 'https://catalog.nypl.org/search~S98?/Xsoviet+union&searchscope=98&SORT=DZ/Xsoviet+union&searchscope=98&SORT=DZ&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=98&SORT=DZ&13%2C13%2C',
    author: 'Hornsby, Rob',
    format: 'Book',
    imprint: 'Cambridge, U.K. ; New York : Cambridge University Press, 2013',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'Requested from ReCAP',
    statusClass: 'requested recap',
    manageUrl: '#',
  },
  {
    title: 'String quartet in F minor, op. 95 "serioso" [sound recording] / Ludwig van Beethoven. Five fugues from the Well-tempered clavier, arr. for string quartet, K. 405 / Johann Sebastian Bach ; Wolfgang Amadeus Mozart. String quartet, op. 3 / Alban Berg. String quartet no. 1 in D major, op. 11 / Peter Ilich Tchaikovsky.',
    url: 'https://catalog.nypl.org/search~S61?/abach/abach/101%2C590%2C20076%2CB/frameset&FF=abach+joahnn+sebastian+1685+1750&1%2C1%2C/indexsort=-',
    author: 'Chamber Music Society of Lincoln Center. Performer.',
    format: 'Audio Tape',
    imprint: 'Jan. 4, 1985.',
    location: 'Performing Arts Research Collections - Recorded Sound',
    locLink: '#',
    status: 'Available',
    statusClass: 'available',
    manageUrl: '#',
  },
  {
    title: 'History of Russia & the Soviet Union in humorous verse / Sabrina P. Ramet',
    url: 'https://catalog.nypl.org/search~S98?/Xsoviet+union&searchscope=98&SORT=DZ/Xsoviet+union&searchscope=98&SORT=DZ&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=98&SORT=DZ&12%2C12%2C',
    author: 'Ramet, Sabina P., 1949',
    format: 'Book',
    imprint: 'Washington, DC : New Academia Publishing : Scarith, 2014',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'In transit from ReCAP',
    statusClass: 'in-transit recap',
    manageUrl: '#',
  },
  {
    title: 'Rostropovich: in memoriam : 9 solos in honor of the maestro\'s legacy / compiled and edited by Marion Feldman.',
    url: 'https://catalog.nypl.org/search~S1?/Xrostropovich&searchscope=1&SORT=D/Xrostropovich&searchscope=1&SORT=D&SUBKEY=rostropovich/1%2C340%2C340%2CB/frameset&FF=Xrostropovich&searchscope=1&SORT=D&4%2C4%2C',
    author: 'Mstislav Rostropovich (and others?)',
    format: 'Notated music (part of a series?)',
    imprint: '[New York] : Carl Fischer, LLC, [2013]',
    location: 'Performing Arts Research Collections - Music',
    locLink: '#',
    status: 'Available',
    statusClass: 'available',
    manageUrl: '#',
  },
  {
    title: 'Mstislav Rostropovich: cellist, teacher, legend / Elizabeth Wilson.',
    url: 'https://catalog.nypl.org/search~S1?/Xrostropovich&searchscope=1&SORT=D/Xrostropovich&searchscope=1&SORT=D&SUBKEY=rostropovich/1%2C340%2C340%2CB/frameset&FF=Xrostropovich&searchscope=1&SORT=D&8%2C8%2C',
    author: 'Wilson, Elizabeth A. M.',
    format: 'Book',
    imprint: 'London: Faber, 2007.',
    location: 'Performing Arts Research Collections - Music',
    locLink: '#',
    status: 'In transit from ILL',
    statusClass: 'in-transit ill',
    manageUrl: '#',
  },
  {
    title: 'The art of dance in the U.S.S.R. : A study of politics, ideology, and culture',
    url: 'https://catalog.nypl.org/search~S101?/Xsoviet+union&searchscope=101&SORT=DZ/Xsoviet+union&searchscope=101&SORT=DZ&SUBKEY=soviet+union/1%2C80%2C80%2CB/frameset&FF=Xsoviet+union&searchscope=101&SORT=DZ&33%2C33%2C',
    author: 'Swift, Mary Grace',
    format: 'Microfilm',
    imprint: '1968',
    location: 'Stephen A. Schwarzman Building, Milstein Microform Reading Room, Room 119',
    locLink: '#',
    status: 'Available',
    statusClass: 'available',
    manageUrl: '#',
  },
  {
    title: 'We demand peace! : Soviet posters of the Cold War',
    url: 'https://catalog.nypl.org/search~S1?/Xrussian+posters&searchscope=1&SORT=DZ/Xrussian+posters&searchscope=1&SORT=DZ&extended=0&SUBKEY=russian+posters/1%2C175%2C175%2CB/frameset&FF=Xrussian+posters&searchscope=1&SORT=DZ&3%2C3%2C',
    author: 'Snopkov A.E., Snopkov P.A. and Shklyaruk A.F.',
    format: 'Portfolio',
    imprint: 'Moskva: Kontakt-Kul’tura, 2007',
    location: 'Stephen A. Schwarzman Building, Art & Architecture Collection, Room 300',
    locLink: '#',
    status: 'Available',
    statusClass: 'available',
    manageUrl: '#',
  },
];

itemHold.forEach(item => {
  const tableRow = `
    <tr role="row">
      <td class="item-details">
        <dl>
          <dt class="item-title"><a href="${item.url}">${item.title}</a></dt>
          <dt>Author</dt>
            <dd>${item.author}</dd>
          <dt>Imprint</dt>
            <dd>${item.imprint}</dd>
          <dt>Format</dt>
            <dd>${item.format}</dd>
        </dl>
      </td>
      <td>
        <span class="${item.statusClass}">${item.status}</span>
      </td>
      <td>
        <a href="${item.locLink}">${item.location}</a>
      </td>
      <td>
        <a href="${item.manageUrl}">Manage this item</a>
      </td>
    </tr>
  `;

  tableBody.insertAdjacentHTML('beforeend', tableRow);
  // console.table(tableRow);
});

// ####
// Helper so we can put the number of table rowss at the top of the table
const trItems = document.querySelectorAll('tbody tr').length;
// console.log(trItems);
const totalNumber = document.getElementById('number-of-holds');
totalNumber.innerHTML = trItems;
