<template>
	<v-card elevation="5">
		<div class="container">
			<div>
				<h2>Single File</h2>
				<hr/>
				<form @submit.prevent="submitFile()" enctype="multipart/form-data">
					<label>File
						<input type="file" ref="file" @change="handleFileUpload"/>
					</label>
					<button>Submit</button>
				</form>
			</div>
		</div>
			<div v-if="proofs">
				<ul v-for="(proof, i) of proofs" :key="i">
					<li >
						<div>
							{{ proof }}
						</div>
					</li>
				</ul>
			</div>
			<div v-else>
				<p>No Files</p>
			</div>
	</v-card>

</template>

<script>
	import axios from 'axios';
	
	export default {
		data(){
			return {
				file: '',
				proofs: null
			}
		},

		created() {
			this.showProofs();
		},
		
		methods: {
			async showProofs() {
				try {
					const result = await axios.get('/proof');
					this.proofs = result;
				} catch (err) {
					console.log(err);
				}
			},

			handleFileUpload(  ){
				// this.file = event.target.files[0];
				this.file = this.$refs.file.files[0];
				
				console.log('this.file 1: ', this.file)
				this.proof = this.file;
			},
			
			async submitFile(){
				let formData = new FormData();
				formData.append('file', this.file);
				for ( let key of formData.entries() ) {
					console.log(key[0] + ', ' + key[1])

				}
				const payload = {
					proof: formData,
				}
				console.log('this.proof 1: ', this.proof)
				console.log('payload: ', payload)
				try {
					await axios.post( `/proof`, payload);
					this.showProofs()
				} catch(err) {
					console.log('FAILURE!! ', err);
				}
			}
		}
	}
</script>

