class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.heroSectionOffset = $('.et-hero-tabs').height(); // Set the initial offset based on hero section height
    let self = this;

    $('.et-hero-tab').click(function(event) { 
      self.onTabClick(event, $(this)); 
    });
    $(window).scroll(() => { this.onScroll(); });
    $(window).resize(() => { this.onResize(); });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if(this.currentId) {
      this.setSliderCss();
    }
    this.heroSectionOffset = $('.et-hero-tabs').height(); // Update on resize
  }

  checkTabContainerPosition() {
    let offset = this.heroSectionOffset - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
    } else {
      $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector() {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    let previousTabId = this.currentId; // Store previous tab ID for section break area
  
    // Loop through tabs
    $('.et-hero-tab').each(function() {
      let id = $(this).attr('href');
      let $targetElement = $(id);
  
      // Ensure the element with the given ID exists
      if ($targetElement.length === 0) {
        return; // Skip if the target element is not found
      }
  
      let offsetTop = $targetElement.offset().top - self.tabContainerHeight;
      let offsetBottom = $targetElement.offset().top + $targetElement.height() - self.tabContainerHeight;
  
      // Check if the scroll position is within the range of the element
      if ($(window).scrollTop() >= offsetTop && $(window).scrollTop() <= offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
  
    // If no new current tab is found, keep the previous one
    if (!newCurrentId && previousTabId) {
      newCurrentId = previousTabId;
      newCurrentTab = $(`.et-hero-tab[href="${newCurrentId}"]`);
    }
  
    // If the tab changes, update the current tab and set the slider CSS
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }
  

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
    $('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', left);
  }
}

$(document).ready(function() {
  new StickyNavigation();
});
