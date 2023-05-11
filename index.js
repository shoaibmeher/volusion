// js forFAQ



const faqs = document.querySelectorAll(".faq_container");
const header = document.querySelectorAll(".faq_header");
const plus = document.querySelectorAll(".faq_header_plus");
const faq_content = document.querySelectorAll(".faq_content");
faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    if (header[index].classList.contains("header_active")) {
      header[index].classList.remove("header_active");
    } else {
      header[index].classList.add("header_active");
    }
    if (plus[index].classList.contains("plus_active")) {
      plus[index].classList.remove("plus_active");
    } else {
      plus[index].classList.add("plus_active");
    }
    if (faq_content[index].classList.contains("faq_content_active")) {
      faq_content[index].classList.remove("faq_content_active");
    } else {
      faq_content[index].classList.add("faq_content_active");
    }
  });
});



// js for reviews 

const reviews = document.querySelectorAll('.review_text');
reviews.forEach((review) => {
  // Trim review text & Add read more button
  const arr = review.innerHTML.split(' ');
  if (arr.length > 70) {
    // Cut to 70 words
    const newText = arr
      .filter((text, index) => {
        return index < 70;
      })
      .join(' ');
    review.innerHTML = newText;
    // Read more button
    const readMoreButton = document.createElement('span');
    readMoreButton.innerHTML = 'Read more...';
    readMoreButton.classList.add('read_more');
    review.appendChild(readMoreButton);
    // Add onClick event to read more button
    if (readMoreButton) {
      readMoreButton.addEventListener('click', () => {
        review.innerHTML = arr.join(' ');
      });
    }
  }
});


// js for Instagram Widget

(function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript"));


// js for olarkchat


(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
olark.configure('CalloutBubble.bubble_width', 100 );
/ custom configuration goes here (www.olark.com/documentation) /
olark.identify('8976-817-10-6014');



