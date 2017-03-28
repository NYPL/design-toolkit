var hideTimeout

function init() {
  $(".nypl-select-field.hidden").hide();
  $('#date-of-birth').mask('00/00/0000');
  $("#step-2, #step-3").hide();
  $("#step-1_submit").click(function (e) {
    $("#step-2").show();
    $("#step-1").hide();
    document.location = "#step-2";
  })
  $("#step-2_submit").click(function (e) {
    $("#step-3").show();
    $("#step-2").hide();
    document.location = "#step-3";
  })
  $("#prev-2").click(function (e) {
    console.log("1");
    $("#step-1").show();
    $("#step-2").hide();
  })
  $("#prev-3").click(function (e) {
    console.log("2");
    $("#step-2").show();
    $("#step-3").hide();
  })
  $(".nypl-navigation-button_button").on("click touchend", function(e) {
    e.preventDefault();
    var selected = 0;
    var self = $(e.target);
    var parent = self.parent();
    var item_count = parent.find("li").length;
    var expanded = self.attr("aria-expanded") == "true";
    // hide all in page
    $(".nypl-navigation-button_list").addClass("hidden")
    $(".nypl-navigation-button_button").removeClass("active").attr("aria-expanded", "false")
    // do for this one
    if (!expanded) {
      parent.find(".nypl-navigation-button_list").removeClass("hidden")
      self.toggleClass("active").attr("aria-expanded", "true")
      // simple and incomplete example keyboard interaction
      parent.find("li:first-child a").focus()
      parent.on("keydown", function (ee) {
        switch (ee.keyCode) {
          case 27: // ESC
            parent.off("keydown")
            parent.find(".nypl-navigation-button_list").addClass("hidden")
            self.removeClass("active").attr("aria-expanded", "false").focus()
            break
          case 32: // SPACE
            break
          case 38: // UP
            ee.preventDefault();
            if (selected == 0) {
              selected = item_count - 1;
            } else {
              selected--;
            }
            break
          case 40: // DOWN
            ee.preventDefault();
            if (selected >= item_count - 1) {
              selected = 0;
            } else {
              selected++;
            }
            break
        }
        parent.find("li:nth-child("+(selected+1)+") a").focus()
      })
    }
  });

  $(".nypl-menu-button_button").on("click touchend", function(e) {
    e.preventDefault();
    var self = $(e.target);
    var parent = self.parent();
    var expanded = self.attr("aria-expanded") == "true";
    // hide all in page
    $(".nypl-menu-button_menu").addClass("hidden")
    $(".nypl-menu-button_button").removeClass("active").attr("aria-expanded", "false")
    // do for this one
    if (!expanded) {
      parent.find(".nypl-menu-button_menu").removeClass("hidden")
      self.toggleClass("active").attr("aria-expanded", "true")
    }
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

  $(".nypl-search_main input[type=radio]").click(function() {
    updateSearchRadio($(this).val())
  })

  $("#nypl-search_query-text").focus(function() {
    showSearch()
  })

  $(".nypl-search_main input[type=radio]").focus(function() {
    focusRadio($(this).val())
  })

  $(".nypl-search_main input[type=radio]").blur(function() {
    blurRadio($(this).val())
  })

  $("#nypl-search_query-text, .nypl-search_type, .nypl-search_button, .nypl-search_radio-label").on("focus click",  function() {
    if (hideTimeout) clearTimeout(hideTimeout)
    showSearch()
  })

  $("#nypl-search_query-text, .nypl-search_type, .nypl-search_button, .nypl-search_radio-label").blur(function() {
    hideTimeout = setTimeout(hideSearch, 100)
  })

  $(".email-toggle button").click(function(e) {
    if ($(e.target).closest('.email-toggle').length && !$(e.target).parents("#email-updates").length) {
      toggleEmail()
    }
  })

  $("body").on("click touchstart touchend", function(e) {
    if (!$(e.target).closest('.nypl-menu-button_button').length && !$(e.target).closest(".nypl-menu-button_menu").length) {
      $(".nypl-menu-button_menu").addClass("hidden")
      $(".nypl-menu-button_button").removeClass("active").attr("aria-expanded", "false")
    }
    if (!$(e.target).closest('.nypl-navigation-button_button').length && !$(e.target).closest(".nypl-navigation-button_list").length) {
      $(".nypl-navigation-button_list").addClass("hidden")
      $(".nypl-navigation-button_button").removeClass("active").attr("aria-expanded", "false")
    }
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
    console.log("hi");
    if (value == "library") {
      $(".nypl-select-field.location").fadeIn(200)
    } else {
      $(".nypl-select-field.location").fadeOut(200)
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
  var self = $(".nypl-results-sorter button")
  self.toggleClass("active").attr("aria-expanded", self.attr("aria-expanded") == "false" ? "true" : "false")
  $(".nypl-results-sorter ul").toggleClass("hidden")
}

function hideSort() {
  $(".nypl-results-sorter button").removeClass("active").attr("aria-expanded", false)
  $(".nypl-results-sorter ul").addClass("hidden")
}

function toggleLogin() {
  var self = $(".login-toggle button.collapsible")
  self.toggleClass("active").attr("aria-expanded", self.attr("aria-expanded") == "false" ? "true" : "false")
  $(".login-toggle div").toggleClass("hidden")
}

function hideLogin() {
  $(".login-toggle button.collapsible").removeClass("active").attr("aria-expanded", false)
  $(".login-toggle div").addClass("hidden")
}

function toggleEmail() {
  var self = $(".email-toggle button")
  self.toggleClass("active").attr("aria-expanded", self.attr("aria-expanded") == "false" ? "true" : "false")
  $(".email-toggle form").toggleClass("hidden")
}

function hideEmail() {
  $(".email-toggle button").removeClass("active").attr("aria-expanded", false)
  $(".email-toggle form").addClass("hidden")
}

function updateSearchRadio(type) {
  $(".nypl-search_radio-label").removeClass("selected")
  $(".nypl-search_radio-label[for=nypl-search_"+type+"]").addClass("selected")
}

function hideSearch() {
  $("#nypl-search_query-text, .nypl-search_main").removeClass("active")
  $(".nypl-search_select").addClass("hidden")
}

function focusRadio(type) {
  blurRadio(type)
  $(".nypl-search_radio-label[for=nypl-search_"+type+"]").addClass("focus")
}

function blurRadio(type) {
  $(".nypl-search_radio-label").removeClass("focus")
}

function showSearch() {
  $("#nypl-search_query-text, .nypl-search_main").addClass("active")
  $(".nypl-search_select").removeClass("hidden")
  // $("ul.nav-buttons li.nypl-search").toggleClass("hidden")
  // $("ul.nav-buttons li.nypl-search a").toggleClass("hidden")
  // $(".nypl-search_main").toggleClass("display")
  // $(".nypl-search_main .nypl-nypl-search_query-text").focus()
}

$(function () {
  init();
})