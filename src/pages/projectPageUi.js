export async function getTestRuns(){
    return $('#navigation-overview-runs').getText();
}

export async function getMilestones(){
    return $('#navigation-overview-viewmilestones').getText();
}