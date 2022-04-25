<template>
  <FileUpload 
    label="Upload Image"
    :fileTypes="['image/*']"
    endpoint="/image-upload"
  />
</template>

<script>
import FileUpload from '@/components/Uploader/FileUpload'
export default {
  name: 'UploadForm',
  components: {
    FileUpload
  }
}
</script>

<style>

</style>