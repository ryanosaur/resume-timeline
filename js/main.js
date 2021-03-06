var app = angular.module('timeline', []);

app.controller('TimelineCtrl', function($scope){
  $scope.jobs = [{
    position: 'Student - Coding House',
    desc: '60 day full-immersion bootcamp in full-stack javascript development.',
    pers: 'Gain the ability to create cool products from the ground up!',
    dates: 'June 2015 - August 2015',
    techz: [
      'CSS / Design: Foundation for Apps (Zurb), Bootstrap',
      'Front End: Angular 1.x, Jade, jQuery, Handlebars',
      'Backend: Node, Express, MongoDB, Firebase',
      'Testing: Mocha, Chai',
      'Automation: Gulp']
  },{
    position: 'Software Developer - Verafin',
    desc: 'Teams included interface and product development, data integration & ETL, operations, and internal engineering in an agile business environment utilizing Scrum and Kanban.',
    pers: 'Absorb all that company culture should be, and learn as much about software development as possibile',
    dates: 'May 2011 - May 2015',
    techz: [
      'Development: Java, SQL, Apex, VisualForce, SOQL',
      'Dependency Management and Injection: Guice, Gradle',
      'Testing: JUnit, TeamCity']
  }];
});

jQuery(document).ready(function($){
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
});
