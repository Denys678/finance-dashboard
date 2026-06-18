type ConfirmDialogProps = {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmDialog ({title, message, onConfirm, onCancel}: ConfirmDialogProps) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{message}</p>

            <button type="button" onClick={onConfirm}>Confirm delete</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default ConfirmDialog;