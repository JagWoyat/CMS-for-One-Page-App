import TextUploader from '../../../components/admin/TextUploader/TextUploader';

export default function ProfilesView() {
  return (
    <div>
      <TextUploader type={'ProfilesTitle1'} />
      <TextUploader type={'ProfilesParagraph1'} />
      <TextUploader type={'ProfilesTitle2'} />
      <TextUploader type={'ProfilesParagraph2'} />
      <TextUploader type={'ProfilesTitle3'} />
      <TextUploader type={'ProfilesParagraph3'} />
    </div>
  );
}
