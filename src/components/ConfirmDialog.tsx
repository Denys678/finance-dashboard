type ConfirmDialogProps = {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

function ConfirmDialog({ title, message, onConfirm, onCancel }: ConfirmDialogProps) {
    return (
        <div className="confirm-dialog-backdrop" role="presentation">
            <div className="confirm-dialog" role="dialog" aria-modal="true">
                <h3>{title}</h3>
                <p>{message}</p>

                <div className="confirm-dialog__actions">
                    <button className="button-danger" type="button" onClick={onConfirm}>
                        Confirm delete
                    </button>

                    <button className="button-secondary" type="button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;