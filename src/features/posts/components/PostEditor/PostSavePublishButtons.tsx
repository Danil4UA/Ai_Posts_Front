import { CircularProgress } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PublishIcon from "@mui/icons-material/Publish";


interface PostSavePublishButtonsProps {
  isSaving: boolean;
  onSave: () => void;
  onPublish: () => void;
}

const PostSavePublishButtons = ({ isSaving, onSave, onPublish }: PostSavePublishButtonsProps) => {
  return (
    <>
      <button
        onClick={onSave}
        disabled={isSaving}
        className="button primary-button save-button"
      >
        {isSaving ? <CircularProgress size={24} /> : <SaveIcon />}
      </button>

      <button
        onClick={onPublish}
        disabled={isSaving}
        className="button primary-button save-button"
      >
        {isSaving ? <CircularProgress size={24} /> : <PublishIcon />}
      </button>
    </>
  );
};

export default PostSavePublishButtons;