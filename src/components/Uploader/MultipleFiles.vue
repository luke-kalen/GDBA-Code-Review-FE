<template>
	<div class="container">
		<div>
			<!-- <h2>{{ $route.params.id }}</h2> -->
			
			<!-- <label>Files -->
				<form>
					<v-text-field 
						label="NAME"
						v-model="name"
					></v-text-field>
					<v-text-field 
						label="DESCRIPTION"
						v-model="description"
					></v-text-field>
					<input class="upload" type="file" multiple @change.prevent="handleFileUploads( $event )"/>
				</form>
			<!-- </label> -->
			<br>
			<v-btn color="primary" v-on:click.prevent="submitFiles()">Submit</v-btn>
		</div>
		<!-- <p>{{files[0].name}}</p>
		<p v-if="proof !== undefined">{{proof[0].name}}</p> -->
	</div>
</template>

<script>
	import axios from 'axios';
	import { mapGetters } from 'vuex';

	export default {
		data(){
			return {
				files: [],
				proof: null
			}
		},

	computed: {
		...mapGetters("user", [ "users" ])
	},
		
		methods: {
			async showFiles() {
				try {
					await axios.get('multiple-files');
				} catch (err) {
					console.log(err);
				}
			},

			handleFileUploads( event ){
				this.files = event.target.files;
				console.log('this.files: ', this.files)
				let formData = new FormData();
				
				for( var i = 0; i < this.files.length; i++ ){
					let file = this.files[i];
					// formData.append('files[' + i + ']', file, 'greece.png');
					// formData.upload = file;
					this.proof = file;
					console.log('this.proof: ', this.proof)
					console.log('formData1: ', formData)
				}
				console.log('formData2: ', formData)
			},

			async submitFiles(){
				const payload = {
					proof: this.proof,
				}
				try {
					await axios.put( `/api/users/${ this.$route.params.id }`, payload, { 
						headers: { 'Content-Type': 'multipart/form-data' } 
					})
					await this.showFiles()
				} catch(err) {
					console.log('FAILURE!! ', err);
				}
			}
		}
	}
</script>
	