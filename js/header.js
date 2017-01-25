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

  $(".nypl-main-search input[type=radio]").click(function() {
    updateSearchRadio($(this).val())
  })

  $("#search-query-text").focus(function() {
    showSearch()
  })

  $(".nypl-main-search input[type=radio]").focus(function() {
    focusRadio($(this).val())
  })

  $(".nypl-main-search input[type=radio]").blur(function() {
    blurRadio($(this).val())
  })

  $("#search-query-text, .nypl-search-type, .nypl-search-button, .nypl-search-radio-label").on("focus click",  function() {
    if (hideTimeout) clearTimeout(hideTimeout)
    showSearch()
  })

  $("#search-query-text, .nypl-search-type, .nypl-search-button, .nypl-search-radio-label").blur(function() {
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
    if (!$(e.target).closest('.nypl-results-sorter').length) {
      hideSort()
    }
    if (!$(e.target).closest('.login-toggle').length && !$(e.target).parents("#login-links").length) {
      hideLogin()
    }
    if (!$(e.target).parents(".nypl-search").length) {
      hideTimeout = setTimeout(hideSearch, 100)
    }
  })

  $(".login-toggle button.collapsible").click(function(e) {
    if ($(e.target).closest('.login-toggle').length && !$(e.target).parents("#login-links").length) {
      toggleLogin()
    }
  })

  $(".nypl-results-sorter button").on("click", function(e) {
    e.preventDefault();
    if ($(e.target).closest('.nypl-results-sorter').length) {
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
  $(".nypl-results-sorter button").toggleClass("active")
  $(".nypl-results-sorter ul").toggleClass("hidden")
}

function hideSort() {
  $(".nypl-results-sorter button").removeClass("active")
  $(".nypl-results-sorter ul").addClass("hidden")
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
  $(".nypl-search-radio-label").removeClass("selected")
  $(".nypl-search-radio-label[for="+type+"]").addClass("selected")
}

function hideSearch() {
  $("#search-query-text, .nypl-main-search").removeClass("active")
  $(".nypl-search-select").addClass("hidden")
}

function focusRadio(type) {
  blurRadio(type)
  $(".nypl-search-radio-label[for="+type+"]").addClass("focus")
}

function blurRadio(type) {
  $(".nypl-search-radio-label").removeClass("focus")
}

function showSearch() {
  $("#search-query-text, .nypl-main-search").addClass("active")
  $(".nypl-search-select").removeClass("hidden")
  // $("ul.nav-buttons li.nypl-search").toggleClass("hidden")
  // $("ul.nav-buttons li.nypl-search a").toggleClass("hidden")
  // $(".nypl-main-search").toggleClass("display")
  // $(".nypl-main-search .nypl-search-query-text").focus()
}

$(function () {
  init();
})