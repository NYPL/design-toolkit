var hideTimeout

function init() {
  $(".nypl-menu-button .nypl-menu-button_button").click(function(e) {
    e.preventDefault();
    var self = $(e.target);
    var parent = self.parent();
    console.log(self, parent, self.closest('.nypl-menu-button'));
    parent.find(".nypl-menu-button_menu").toggleClass("hidden")
    var expanded = parent.find(".nypl-menu-button_menu").hasClass("hidden") ? "false" : "true";
    self.toggleClass("active").attr("aria-expanded", expanded)
    console.log(expanded);
  });

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
    // $(".nypl-menu-button .nypl-menu-button_menu").addClass("hidden")
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
  $(".nypl-results-sorter button").toggleClass("active").attr("aria-expanded", "true")
  $(".nypl-results-sorter ul").toggleClass("hidden")
}

function hideSort() {
  $(".nypl-results-sorter button").removeClass("active").attr("aria-expanded", "false")
  $(".nypl-results-sorter ul").addClass("hidden")
}

function toggleLogin() {
  $(".login-toggle button.collapsible").toggleClass("active").attr("aria-expanded", "true")
  $(".login-toggle div").toggleClass("hidden")
}

function hideLogin() {
  $(".login-toggle button.collapsible").removeClass("active").attr("aria-expanded", "false")
  $(".login-toggle div").addClass("hidden")
}

function toggleEmail() {
  $(".email-toggle button").toggleClass("active").attr("aria-expanded", "true")
  $(".email-toggle form").toggleClass("hidden")
}

function hideEmail() {
  $(".email-toggle button").removeClass("active").attr("aria-expanded", "false")
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