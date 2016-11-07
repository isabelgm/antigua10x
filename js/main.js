jQuery(function($) {
  smoothScroll.init({
    speed: 1000,
    updateURL: false
  });
});

// Speaker Modal

$('#speakerModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var speakerName = button.find('h3').text() // Extract info from data-* attributes
  var speakerBio = button.data('bio')
  var speakerPhoto = button.find('img').attr("src")

  var modal = $(this)
  modal.find('#speakerName').text(speakerName)
  modal.find('#speakerBio').text(speakerBio)
  modal.find('#speakerPhoto').attr("src",speakerPhoto)
})

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
