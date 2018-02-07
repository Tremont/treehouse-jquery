$('#flashMessage')
  .hide()
  .fadeIn(1000)
  .delay(3000)
  .slideUp();

$('.blogpage-title').text();
$('.blogNewPost').html();

const title = "My first Blog post";
const content = "This is my first post";

$('#blogTitlePreview').text(title);
 $('#blogNewPost').html(title);

$('#previewButton').click(function(){
const title = $('#blogTitleInput').val();
  console.log(title);
})
