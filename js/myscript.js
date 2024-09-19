  $(function() {
  $('.Home-banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
  //   navText: [
  //     '<i class="fa-solid fa-arrow-left"></i>',
  //     '<i class="fa-solid fa-arrow-right"></i>'
  // ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('.client-testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: false,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
  ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('.client-gallery').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: false,
  //   navText: [
  //     '<i class="fa-solid fa-angle-left"></i>',
  //     '<i class="fa-solid fa-angle-right"></i>'
  // ],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      990: {
        items: 5
      },
      1300: {
        items: 7
      }
    }
  })
  });

// counter

  function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
   }
   
   function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
   
   }
   
   //When the document is ready
   $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
      //Checking if each items to animate are 
      //visible in the viewport
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
   });   


// vendor -sign up
// Object containing cities for each state
const cities = {
  'AP': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
  'AR': ['Itanagar', 'Naharlagun', 'Bomdila'],
  'AS': ['Guwahati', 'Dispur', 'Dibrugarh', 'Silchar'],
  'BR': ['Patna', 'Gaya', 'Bhagalpur'],
  'CH': ['Chandigarh'],
  'CT': ['Raipur', 'Bilaspur', 'Korba'],
  'DN': ['Daman', 'Diu'],
  'DL': ['Delhi'],
  'GA': ['Panaji', 'Margao', 'Vasco da Gama'],
  'GJ': ['Ahmedabad', 'Vadodara', 'Surat', 'Rajkot'],
  'HR': ['Gurgaon', 'Faridabad', 'Hisar'],
  'HP': ['Shimla', 'Dharamshala', 'Kangra'],
  'JK': ['Srinagar', 'Jammu', 'Udhampur'],
  'JH': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
  'KA': ['Bengaluru', 'Mysuru', 'Hubli'],
  'KL': ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
  'LA': ['Leh'],
  'LD': ['Kavaratti'],
  'MP': ['Bhopal', 'Indore', 'Jabalpur'],
  'MH': ['Mumbai', 'Pune', 'Nagpur', 'Aurangabad'],
  'MN': ['Imphal'],
  'ML': ['Shillong', 'Jowai'],
  'MZ': ['Aizawl'],
  'NL': ['Kohima'],
  'OD': ['Bhubaneswar', 'Cuttack', 'Rourkela'],
  'PY': ['Puducherry'],
  'PB': ['Chandigarh', 'Amritsar', 'Ludhiana'],
  'RJ': ['Jaipur', 'Udaipur', 'Jodhpur'],
  'SK': ['Gangtok'],
  'TN': ['Chennai', 'Coimbatore', 'Madurai'],
  'TS': ['Hyderabad', 'Warangal'],
  'TR': ['Agartala'],
  'UP': ['Lucknow', 'Kanpur', 'Varanasi'],
  'UT': ['Dehradun', 'Haridwar'],
  'WB': ['Kolkata', 'Siliguri', 'Durgapur']
};

// Function to update city dropdown based on selected state
function updateCities() {
  const state = document.getElementById('state').value;
  const citySelect = document.getElementById('city');

  // Clear existing options
  citySelect.innerHTML = '<option value="">Select a city</option>';

  if (state && cities[state]) {
      cities[state].forEach(city => {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
      });
  }
}



// faq


$(document).ready(function() {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function(){
    if( $(this).parent().hasClass("active") ){
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else{
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});