import ButtonUploader from '../components/admin/ButtonUploader/ButtonUploader';
import ImageUploader from '../components/admin/ImageUploader/ImageUploader';
import TextUploader from '../components/admin/TextUploader/TextUploader';

export default function Admin() {
  return (
    <div>
      <TextUploader type={'MainTitle'} />
      <ImageUploader type={'Logo'} />
      <ButtonUploader type={'MainButtons'} />
      <ImageUploader type={'Background'} />
      <TextUploader type={'MainHeader'} />
    </div>
  );
}
