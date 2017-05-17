function FileUploadController() {
	$(function() {

		$('#form-upload').fileupload();


		$('#file').change( function () {
			$('#file-name').html(this.value.substring(12));
		});

		$("#select-file").on("click", function(){
			$("#file").trigger("click");
		});

		$('#form-upload').fileupload({
			dataType: 'json',
			done: function (e, data) {
				$('#video-upload-label').show();
				$('#last-video-uploaded').show();
				$('#progress_status').html(' Upload Finished');
				$('#last-video-uploaded').html(data.result.name + " was uploaded to Wistia sucessfully");
				if (data.result.name.match(/.(m4v|mp4|mpg|avi)$/i)) {
					$('#video-player').attr('src', 'https://fast.wistia.net/embed/medias/' + data.result.hashed_id + '.jsonp');
					$('#video-player-div').addClass('wistia_async_' + data.result.hashed_id);
					$('#video-loading').show();
				}
				$('#select-file').removeAttr('disabled');
			},
			send: function (e, data) {
				$('#select-file').attr('disabled', '');
			},
			progressall: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				$('.progress-bar').attr('aria-valuenow', progress);
				$('.progress-bar').css('width', progress + '%');
				$('#progress_status').html('Uploading File: ' + progress + '%');
			},
			error: function(e, data) {

			}
		});

		$("#cancel-upload").on("click", function(){
			location.reload();
		});

	});
}

angular.module('App').component('processStreetUploadWistia', {
	templateUrl: 'views/process-street-upload-wistia.html',
	controller: FileUploadController,
	bindings: {
	}
});
