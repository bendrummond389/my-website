<!-- Import the resume PDF file using the $lib alias -->
<script>
	import resume from '$lib/assets/bendrummond.pdf';
</script>

<!-- Create a responsive iframe container to embed the PDF file -->
<div class="responsive-iframe-container">
	<!-- Set the source URL of the iframe to the imported PDF file and provide a title -->
	<iframe
		src={resume}
		title="Ben Drummond Resume"
	/>
</div>

<!-- Apply styles to the iframe container and iframe to make them responsive -->
<style>
	/* Set the container to have a 16:9 aspect ratio and fill the width of its parent */
	.responsive-iframe-container {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%; /* This is the aspect ratio of 16:9 */
	}

	/* Set the iframe to fill the container and remove any extra spacing */
	.responsive-iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
