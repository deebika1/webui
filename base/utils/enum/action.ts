export enum WorkflowAction {
    Pending,
    Reject,
    Save,
    Hold,
    Cancel,
    Reset,
    None,
    uploadImage,

    savePre,
    savePost,
    rejectPre,
    rejectPost,
    pendingPost,
    pendingPre,
    holdPre,
    holdPost,
    cancelPre,
    cancelPost
}

export enum GeneralAction {
    Claim,
    ViewBriefing,
    ViewInstruction,
    View,
    None
}