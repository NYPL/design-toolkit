var hideTimeout

function init() {
  $(".select-box").on("change", function(e) {
    var id = $(e.target).attr("id");
    console.log(id);
    var buttonid = "btn-apply_" + id;
    $("#"+buttonid).remove();
    if (id == "date") {
      var val = $(e.target).val();
      if (val == "date_range") {
        $(".text-field.year-text").removeClass("hidden");
        return;
      }
    }
    $(".text-field.year-text").addClass("hidden");
    var html = '<input type="submit" id="'+buttonid+'" class="submit-form-button" name="Apply" value="Apply">';
    $(e.target).parent().after(html);
  })

  $("#main-search input[type=radio]").click(function() {
    updateSearchRadio($(this).val())
  })

  $("#search-query-text").focus(function() {
    showSearch()
  })

  $("#main-search input[type=radio]").focus(function() {
    focusRadio($(this).val())
  })

  $("#main-search input[type=radio]").blur(function() {
    blurRadio($(this).val())
  })

  $("#search-query-text, .search-type, .search-button, .search-radio-label").on("focus click",  function() {
    if (hideTimeout) clearTimeout(hideTimeout)
    showSearch()
  })

  $("#search-query-text, .search-type, .search-button, .search-radio-label").blur(function() {
    hideTimeout = setTimeout(hideSearch, 100)
  })

  $(".email-toggle button").click(function(e) {
    if ($(e.target).closest('.email-toggle').length && !$(e.target).parents("#email-updates").length) {
      toggleEmail()
    }
  })

  $("body").on("click touchstart touchend", function(e) {
    if (!$(e.target).closest('.email-toggle').length && !$(e.target).parents("#email-updates").length) {
      hideEmail()
    }
    if (!$(e.target).closest('.sorter').length) {
      hideSort()
    }
    if (!$(e.target).closest('.login-toggle').length && !$(e.target).parents("#login-links").length) {
      hideLogin()
    }
    if (!$(e.target).parents(".search").length) {
      hideTimeout = setTimeout(hideSearch, 100)
    }
  })

  $(".login-toggle button.collapsible").click(function(e) {
    if ($(e.target).closest('.login-toggle').length && !$(e.target).parents("#login-links").length) {
      toggleLogin()
    }
  })

  $(".sorter button").on("click", function(e) {
    e.preventDefault();
    if ($(e.target).closest('.sorter').length) {
      toggleSort()
    }
  })

  $("input[name=available]").change(function() {
    var value = $("input[name=available]:checked").val()
    if (value == "library") {
      $("div.location").fadeIn(200)
    } else {
      $("div.location").fadeOut(200)
    }
  })

  $(".main-menu-toggle").click(function() {
    $(this).remove()
    $(".nav-buttons, .service-buttons").css("display","block")
  })

  $(".collapsed-menu-toggle").click(function() {
    $(this).remove()
    $("header").removeClass("collapsed")
  })

}

function toggleSort() {
  $(".sorter button").toggleClass("active")
  $(".sorter ul").toggleClass("hidden")
}

function hideSort() {
  $(".sorter button").removeClass("active")
  $(".sorter ul").addClass("hidden")
}

function toggleLogin() {
  $(".login-toggle button.collapsible").toggleClass("active")
  $(".login-toggle div").toggleClass("hidden")
}

function hideLogin() {
  $(".login-toggle button.collapsible").removeClass("active")
  $(".login-toggle div").addClass("hidden")
}

function toggleEmail() {
  $(".email-toggle button").toggleClass("active")
  $(".email-toggle form").toggleClass("hidden")
}

function hideEmail() {
  $(".email-toggle button").removeClass("active")
  $(".email-toggle form").addClass("hidden")
}

function updateSearchRadio(type) {
  $(".search-radio-label").removeClass("selected")
  $(".search-radio-label[for="+type+"]").addClass("selected")
}

function hideSearch() {
  $("#search-query-text").removeClass("active")
  $(".search-select").addClass("hidden")
}

function focusRadio(type) {
  blurRadio(type)
  $(".search-radio-label[for="+type+"]").addClass("focus")
}

function blurRadio(type) {
  $(".search-radio-label").removeClass("focus")
}

function showSearch() {
  $("#search-query-text").addClass("active")
  $(".search-select").removeClass("hidden")
  // $("ul.nav-buttons li.search").toggleClass("hidden")
  // $("ul.nav-buttons li.search a").toggleClass("hidden")
  // $("#main-search").toggleClass("display")
  // $("#main-search .search-query-text").focus()
}

$(function () {
  init();
})