'use strict';

const listContainer = document.querySelector('.nypl-card-container');

function loadJSON(callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/staffPicks2018.json', true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState == 4 && xobj.status == 200) {
      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
}

//
// SVG Icon for Reviewer's Name
//
const pencilIcon = `
<svg width="48" height="47.923" viewBox="0 0 48 47.923" class="svgIcon nypl-icon" aria-hidden="true" preserveAspectRatio="xMidYMid meet" aria-labelledby="icon-title">
    <title id="icon-title">Reviewed by Icon</title>
    <path d="M9.826 45.06l28.026-28.026-6.964-6.964L2.862 38.096 0 47.923l9.826-2.863zM33.409 7.626l2.792-2.792 6.965 6.964-2.793 2.793zM38.243 2.793L41.036 0 48 6.965l-2.792 2.792z"/>
</svg>
`;

//
// Call loadJSON function with anonymous callback
//
loadJSON(response => {
  // Put the response into a variable we can work with
  const staffPicksJSON = JSON.parse(response);

  function checkForURL(ebookLink, catalogLink, title) {
    if (!ebookLink && !catalogLink) {
      const itemUrlMarkup = `
        <p><i>There was an error providing the link data...</i></p>
      `;
      return itemUrlMarkup;
    } else if (ebookLink && catalogLink) {
      const itemUrlMarkup = `
      <a href="${catalogLink}" class="catalog-url" aria-label="Request Book: ${title}">
      <svg width="32px" height="32px" viewBox="0 0 32 32" class="book-icon svgIcon nypl-icon" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <title>NYPL Book SVG Icon</title>
        <g>
          <path d="M26.09478,8.31652A13.1617,13.1617,0,0,0,15.97189,8.1603a13.079,13.079,0,0,0-10.09165.18746,0.88881,0.88881,0,0,0-.46865.84357V21.81371a0.89164,0.89164,0,0,0,.37492.81233,0.93487,0.93487,0,0,0,.90606.06249,11.44018,11.44018,0,0,1,8.9044,0c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70873,0.70873,0,0,0,.125.03124h0.18746a0.5317,0.5317,0,0,0,.2187-0.03124,0.06237,0.06237,0,0,0,.06249-0.03124,0.70873,0.70873,0,0,1,.125-0.03124,11.464,11.464,0,0,1,8.9044,0,0.86486,0.86486,0,0,0,.40617.09373A1.05326,1.05326,0,0,0,26.251,22.626a0.94244,0.94244,0,0,0,.43741-0.81233V9.19133A1.04849,1.04849,0,0,0,26.09478,8.31652ZM24.78256,20.439a13.30172,13.30172,0,0,0-8.74818.34368A13.26349,13.26349,0,0,0,7.2862,20.439V9.8162a11.30538,11.30538,0,0,1,8.342.2187c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70872,0.70872,0,0,0,.125.03124h0.34368a0.11478,0.11478,0,0,0,.09373-0.03124c0.03125,0,.06249-0.03124.09373-0.03124,0,0,.06249,0,0.06249-0.03124a11.51979,11.51979,0,0,1,8.37326-.2187V20.439H24.78256Z"></path>
          <path d="M16.00313,17.81454a0.76028,0.76028,0,0,1-.74984-0.74984V13.378a0.74984,0.74984,0,0,1,1.49969,0V17.0647A0.74014,0.74014,0,0,1,16.00313,17.81454Z"></path>
        </g>
      </svg>
      <span>Request Book</span>
    </a>
    <a href="${ebookLink}" class="ebook-url" aria-label="${title}">
      <svg width="32" height="32" viewBox="0 0 32 32" class="eReader-icon svgIcon nypl-icon" aria-hidden="true">
        <title>NYPL eReader SVG Icon</title>
        <path d="M23.02352,5.00588H9.00588a2.38332,2.38332,0,0,0-2,2.00588V24.99412A2.45762,2.45762,0,0,0,9,27.00588H22.99412A2.22259,2.22259,0,0,0,24.98824,25V6.98843a1.97259,1.97259,0,0,0-1.6106-1.94478ZM23,23.99608H9V7.0002l14.02352-.01178Z"></path>
        <path d="M20.61338,9.99038h-9.186a0.456,0.456,0,0,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z"></path>
        <path d="M20.642,13H11.456a0.50163,0.50163,0,1,1,0-1h9.12081a0.674,0.674,0,0,1,.6497.49219A0.74346,0.74346,0,0,1,20.642,13h0Z"></path>
        <path d="M20.65624,15.956h-9.186a0.456,0.456,0,1,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z"></path>
        <path d="M20.55608,18.9121h-9.186a0.456,0.456,0,1,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z"></path>
        <path d="M20.61338,21.98237h-9.186a0.456,0.456,0,0,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z"></path>
      </svg>
      <span>Request E-Book</span>
    </a>`;
      return itemUrlMarkup;
    } else if (!ebookLink && catalogLink) {
      const itemUrlMarkup = `
      <a href="${ebookLink}" class="catalog-url nypl-primary-button" aria-label="Request Book: ${title}">
      <svg width="32px" height="32px" viewBox="0 0 32 32" class="book-icon svgIcon nypl-icon" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <title>NYPL Book SVG Icon</title>
        <g>
          <path d="M26.09478,8.31652A13.1617,13.1617,0,0,0,15.97189,8.1603a13.079,13.079,0,0,0-10.09165.18746,0.88881,0.88881,0,0,0-.46865.84357V21.81371a0.89164,0.89164,0,0,0,.37492.81233,0.93487,0.93487,0,0,0,.90606.06249,11.44018,11.44018,0,0,1,8.9044,0c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70873,0.70873,0,0,0,.125.03124h0.18746a0.5317,0.5317,0,0,0,.2187-0.03124,0.06237,0.06237,0,0,0,.06249-0.03124,0.70873,0.70873,0,0,1,.125-0.03124,11.464,11.464,0,0,1,8.9044,0,0.86486,0.86486,0,0,0,.40617.09373A1.05326,1.05326,0,0,0,26.251,22.626a0.94244,0.94244,0,0,0,.43741-0.81233V9.19133A1.04849,1.04849,0,0,0,26.09478,8.31652ZM24.78256,20.439a13.30172,13.30172,0,0,0-8.74818.34368A13.26349,13.26349,0,0,0,7.2862,20.439V9.8162a11.30538,11.30538,0,0,1,8.342.2187c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70872,0.70872,0,0,0,.125.03124h0.34368a0.11478,0.11478,0,0,0,.09373-0.03124c0.03125,0,.06249-0.03124.09373-0.03124,0,0,.06249,0,0.06249-0.03124a11.51979,11.51979,0,0,1,8.37326-.2187V20.439H24.78256Z"></path>
          <path d="M16.00313,17.81454a0.76028,0.76028,0,0,1-.74984-0.74984V13.378a0.74984,0.74984,0,0,1,1.49969,0V17.0647A0.74014,0.74014,0,0,1,16.00313,17.81454Z"></path>
        </g>
      </svg>
      <span>Request Book</span>
    </a>`;
    return itemUrlMarkup;
    }
  };
    
    //
    // convert the tags to classes
    // 
  this.classesFromTags = (pickTag) => {
    const cleanClasses = pickTag.map(pickTag => pickTag.toLowerCase().split(' ').join('-'));
    return cleanClasses.join(' ');
  };

  //
  // remove the commas from the array
  //
  this.tagsRaw = (rawTag) => {
    return rawTag.join(', ');
  };

  staffPicksJSON.picks.forEach(pick => {
    const pickTags = pick.tags;
    const insertClasses = classesFromTags(pickTags);
    const theRawTags = tagsRaw(pickTags);

    //
    // links to items in catalog
    const catalogURL = pick.book.catalogUrl;
    const ebookURL = pick.book.ebookUrl;
    const pickReview = pick.reviews[0];
  
    //
    // variable for the title
    const ebookTitle = pick.book.title;
    //
    // insert the urls for buttons function
    const insertURL = checkForURL(ebookURL, catalogURL, ebookTitle);

    //
    // construct the card markup
    const cardMarkUp = `
    <li class="book-item ${insertClasses}">
      <div class="book-title-image-lockup">
        <h3 class="book-item-title">${ebookTitle}</h3>
        <p class="book-item-author">${pick.book.author}</p>
        <div class="book-item-image-box">
          <img alt="" src="${pick.book.imageUrl}">
        </div>
      </div>
      <div class="book-item-details">
          <p class="description">${pickReview.text}</p>
          <p class="picked-by"><span>${pencilIcon}</span>${pickReview.reviewerName},</p>
          <p class="reviewer-location">${pickReview.reviewerLocation.prefLabel}</p>
      </div>  
      <div class="book-item-catalog-links">
        <!-- the url block -->
        ${insertURL}
      </div>
      <p class="book-item-tags visuallyHidden js">
        <span>Tags: </span>
        <span>${theRawTags}</span>
      </p>
</li>`;

listContainer.insertAdjacentHTML('beforeend', cardMarkUp);

  });
});