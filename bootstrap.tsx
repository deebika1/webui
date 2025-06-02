import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizedRoute from "./auth/AuthorizedRoute";
import {
  Tool,
  LandingPage,
  Dashboard,
  WOList,
  WorkOrderInfo,
  AllTask,
  BPMN,
  Activity,
  Division,
  Stage,
  SubDivision,
  Login,
  Location,
  MenuMapping,
  SampleMenu,
  Color,
  Software,
  NotFound,
  templeteUploader,
  ActivityConfig,
  ToolsConfig,
  SoftwareConfig,
  FtpConfig,
  workFlowList,
  UserList,
  UomList,
  ViewDespatch,
  History,
  Journal,
  JournalNew,
  NewJournalCreateNew,
  JournalCreate,
  NewJournalCreate,
  EmailTrigger,
  TrackitTrigger,
  ToolsAudit,
  ToolCreate,
  Query,
  templeteUploaderCreate,
  Norms,
  NormsCreate,
  CreateNotifications,
  CreateNotificationsTemplate,
  CreateSenderEmailTemplate,
  CreateCheckListMaster,
  DownloadManuscript,
  ActivityTrack,
  ActivityInterval,
  IncomingInspectionReport,
  DespatchFailureReport,
  FTPAuditReport,
  FTPDownloadStatusReport,
  WipEngineActivityReport,
  RolesUpload,
  BookMaster,
  BookMasterDetails,
  Oupjournal,
  // Manuscriptstatus
  ToolsMasterScreen,
  FTPstatus,
  WMSConfiguration,
  MasterScreen,
  WorkflowConfiguration,
  RunningOnTools,
  JobsheetSpringer,
  // <--------newItracks
  ItrackMetaDataPage,
  ItrackFeedBackPage,
  ItrackD7Analysis,
  Feedbackview,
  Appreciation,
  Timeline,
  QualityReport,
  DashboardItrack,
  AppreciationReport,
  DownloadUploadManuscript,
  Masterworkflow,
  CustomerCopy,
  MISReport,
  OverallHistory,
  CustomerSetup,
  CustomerTimeline,
  workordertimeline,
  WorkOrderSummary,
  RfiEntry,
  // newItracks------->
  // <--------iProductivity
  Jobnorms,
  JobConfiguration,
  SummaryReport,
  ManualLogistics,
  QuarterMIS,
  ACSFTPDownloadStatusReport,
  AcknowledgementReport,
  ACSCopyeditingQue,
  WorkOrderInfoDynamic,
  WorkOrderStageDynamic,
  manuallog,
  WorkOrderIncomingiTrack,
  CupAuthorUpload,
  NoteFromVendorReport,
  OverallFileReport,
  EngineFailureReport,
  IndividualProductivityReport,
  NewWIPReport,
  NewOTDReport,
  ACSAutomationPage,
  ProdDespatchCCSetup,
  ReadyXMLTracker,
  ProblemTask,
  ProblemDetails,
  Preview,
  ProblemTaskApproval, 
  FTPFailureReport, 
  JournalSignal,
  CAMSAcknowledgementReport,
  DoNotPublishReport,
  ConvertFilesReport,
  ShiftWiseInflowReport,
  ShiftWiseOutflowReport,
  CAMPUSSignalSend,
  CampusAuditReport
} from "./components";
import Manuscriptstatus from "./shared/components/aduit/manuscriptstatus";
import { Report } from "./shared/components/report/index";
// import { WIPReportTwo } from "./shared/components/report/indextwo";
import { WIPReportThree } from "./shared/components/report/indexthree";
import { StageCreatedReport } from "./shared/components/report/stagereport";
import { AuditReport } from "./shared/components/report/audit-report/auditReport";
import { CompletedWorkOrders } from "./shared/components/report/active-work-order-report/activeWorkorderReport";
import { JobSummaryReport } from "./shared/components/report/job-summary-report/jobSummaryReport";
//import { ToolsMasterAccessRights } from "./shared/components/report/toolsMaster-accessRights/toolsMaster-AccessRights";
import { GraphicImageDelete } from "./shared/components/report/graphic-image-delete/graphicImageDelete";
import { ToolWIP } from "./shared/components/report/tool-wip-report/index";
import { ToolSTatus } from "./shared/components/toolsRuuningStatus/index";
import { Notifications } from "./shared/components/masters/notification/notifications/list/index";
import { NotificationsTemplate } from "./shared/components/masters/notification/notificationTemplateMaster/list/index";
import EmailTemplate from './shared/components/masters/emailTemplate/index'
import CreateEmailTemplate from './shared/components/masters/emailTemplate/createNewTemplate'
import EditEmailTemplate from './shared/components/masters/emailTemplate/editEmailTemplate'
import { SenderEmailTemplate } from "./shared/components/masters/notification/senderEmailAddressMaster/list/index";
import { CheckListMaster } from "./shared/components/masters/checklist/list/index";
import { FileStatusReport } from "./shared/components/fileStatusReport/index";
import { Files } from "./shared/components/files/index";
import WHSLoader from "./shared/widgets/loader/spinner";
import jobnorms from "./shared/components/iTracks/iproductivity/jobnorms";
import IAspireRoutes from "./shared/components/iAspire/Routes";
import SalesPMORoutes from "./shared/components/salesPMO/Routes";
import CUPElementsRoutes from "./shared/components/cupelement/Routes";
import Ialt from "./shared/components/iAlt/Routes";
import Kamcustomerrc from "./shared/components/salesPMO/rateentry/rateentryedit";
import SwiftXMLReport from "./shared/components/oupjournal/swiftxmlreport";
import LicenseChaser from "./shared/components/oupjournal/licensechaser";
import RateConfigurationSetup from "./shared/components/salesPMO/configuration";
import RateConfigStepper from "./shared/components/salesPMO/configuration/rateConfigGroup";
import ProductionOptionsDetails from "./shared/components/iAlt/productionOptionsDetails";
import WOBulkUpload from "./shared/components/woi/createDynamic/WOBulkUpload";
import WOUserSetup from "./shared/components/iTracks/customersetup/workorderUserSetup";
import NLPMaster from "./shared/components/masters/inlp/list";
import CreateLanguageVariant from "./shared/components/masters/inlp/create";
import NLPScoreMaster from "./shared/components/masters/inlpmaster/list"
import CreateNlpScore from "./shared/components/masters/inlpmaster/create"


export default function Maincontents(props: any) {
  return (
    <Suspense fallback={<WHSLoader />}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />

        {/* newItracks */}
        <Route path="/Appreciation" component={Appreciation} />
        <AuthorizedRoute path="/oupjournal" component={Oupjournal} />
        <AuthorizedRoute path="/swiftxmlreport" component={SwiftXMLReport} />
        <AuthorizedRoute path="/licensechaser" component={LicenseChaser} />
        {/* <Route path='/masterscreen' component={MasterScreen} /> */}
        <Route path='/appreciationreport' component={AppreciationReport} />
        <Route path='/JobConfiguration' component={JobConfiguration} />
        <Route path='/wmsconfiguration' component={WMSConfiguration} />
        <Route path="/WorkflowConfiguration" component={WorkflowConfiguration} />
        <Route path='/BookMaster' component={BookMaster} />
        <AuthorizedRoute path='/downloaduploadmanuscript' component={DownloadUploadManuscript} />
        {/* <Route path='/downloaduploadmanuscript' component={DownloadUploadManuscript} /> */}
        <Route path='/jobsheetspringer' component={JobsheetSpringer} />
        <Route path='/CustomerSetup' component={CustomerSetup} />
        <Route path='/workordertimeline' component={workordertimeline} />
        <Route path='/RfiEntry' component={RfiEntry} />
        <Route path='/config' component={RateConfigurationSetup} />
        <Route path='/confignew' component={RateConfigStepper} />
        <Route path='/customersetupnew' component={CustomerTimeline} />
        <Route path='/problemtask' component={ProblemTask} />
        <Route path='/problemDetails' component={ProblemDetails} />
        <Route path='/preview' component={Preview} />
        <AuthorizedRoute path='/newcustomerworkflowlist' component={workFlowList} />

        {/* <Route path='/stagenew' component={stagenew} /> */}
        <Route path='/CustomerCopy' component={CustomerCopy} />
        <AuthorizedRoute path='/overallhistory' component={OverallHistory} />
        <AuthorizedRoute path='/runningonfiles' component={RunningOnTools} />
        <AuthorizedRoute path='/masterworkflow' component={Masterworkflow} />
        {/* newItracks */}
        <AuthorizedRoute path="/dashboard" component={Dashboard} />
        <AuthorizedRoute path="/wipreport" component={Report} />
        <AuthorizedRoute path="/jobsummary" component={JobSummaryReport} />
        <AuthorizedRoute path="/acknowledgementreport" component={AcknowledgementReport} />
        <AuthorizedRoute path="/notefromvendor" component={NoteFromVendorReport} />
        <AuthorizedRoute path="/overallfilestatus" component={OverallFileReport} />
        <AuthorizedRoute path="/enginefailure" component={EngineFailureReport} /> 
        <AuthorizedRoute path="/individualproductivityreport" component={IndividualProductivityReport}/>
       <AuthorizedRoute path="/ftpfailurereport" component={FTPFailureReport} />
        <AuthorizedRoute path="/donotpublish" component={DoNotPublishReport} /> 
        <AuthorizedRoute path="/convertfiles" component={ConvertFilesReport} /> 
        <AuthorizedRoute path="/shiftwiseinflowreport" component={ShiftWiseInflowReport} />
        <AuthorizedRoute path="/shiftwiseoutflowreport" component={ShiftWiseOutflowReport} />        
        <AuthorizedRoute path="/campusaudit" component={CampusAuditReport} /> 
        {/* <AuthorizedRoute path="/toolsmasteraccessrights" component={ToolsMasterAccessRights} /> */}
        <AuthorizedRoute
          path="/graphicimageinfo"
          component={GraphicImageDelete}
        />
        <AuthorizedRoute path="/toolswipreport" component={ToolWIP} />
        <AuthorizedRoute
          path="/despatchfailurereport"
          component={DespatchFailureReport}
        />
        <AuthorizedRoute path="/ftpauditreport" component={FTPAuditReport} />
        <AuthorizedRoute
          path="/ftpdownloadstatusspringer"
          component={FTPDownloadStatusReport}
        />
        <AuthorizedRoute path="/acsftpdownloadstatusreport"
          component={ACSFTPDownloadStatusReport} />
        <AuthorizedRoute path="/readyxmltracker"
          component={ReadyXMLTracker} />  
        <AuthorizedRoute path="/problemtaskapproval"
          component={ProblemTaskApproval} />
        <AuthorizedRoute path={`/journalsignal`} component={JournalSignal} />
        {/* <AuthorizedRoute path="/preview"
          component={Preview} />
           <AuthorizedRoute path="/problemtask/preview"
          component={Preview} /> */}
        <AuthorizedRoute path="/acscopyeditingqueue"
          component={ACSCopyeditingQue} />
        <AuthorizedRoute
          path="/wipengineactivityreport"
          component={WipEngineActivityReport}
        />
        <AuthorizedRoute path="/auditreport" component={AuditReport} />
        <AuthorizedRoute
          path="/completedworkorders"
          component={CompletedWorkOrders}
        />
        <AuthorizedRoute path="/wipreportTwo" component={WIPReportThree} />
        <AuthorizedRoute
          path="/StageCreatedReport"
          component={StageCreatedReport}
        />
        <AuthorizedRoute
          path="/IncomingInspectionReport"
          component={IncomingInspectionReport}
        />
        <AuthorizedRoute path="/ftpstatus" component={FTPstatus} />
        <Route path="/toolsaccessrights" component={ToolsMasterScreen} />

        <AuthorizedRoute
          path="/libraryrepository"
          component={templeteUploader}
        />
        <AuthorizedRoute path="/workflowlist" component={workFlowList} />
        <AuthorizedRoute path="/toolstatus" component={ToolSTatus} />
        <AuthorizedRoute
          path="/manuscriptstatus"
          component={Manuscriptstatus}
        />
        <AuthorizedRoute
          path="/filestatusreport"
          component={FileStatusReport}
        />

        <AuthorizedRoute
          path="/master/nlpconfig"
          component={NLPMaster}
        />
        <Route path="/createlanguagevariant" component={CreateLanguageVariant} />

        <AuthorizedRoute
          path="/master/nlpmaster"
          component={NLPScoreMaster}
        />
         <AuthorizedRoute path="/camsacknowledgementreport" component={CAMSAcknowledgementReport} />
         {/* <Route path="/camsacknowledgementreport" component={CAMSAcknowledgementReport} /> */}

        <Route path="/createNlpScore" component={CreateNlpScore} />
        CreateNlpScore

        <Route
          path="/workorder"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute exact path={`${url}`} component={WOList} />
              <AuthorizedRoute
                path={`${url}/create`}
                component={WorkOrderInfo}
              />
              <AuthorizedRoute
                path={`${url}/createdyn`}
                component={WorkOrderInfoDynamic}
              />
                <AuthorizedRoute
                path={`${url}/stagedyn`}
                component={WorkOrderStageDynamic}
              />
              <AuthorizedRoute path={`${url}/incomingiTrack`} component={WorkOrderIncomingiTrack}/>
              <AuthorizedRoute 
              path={`${url}/manuallogisticentry`}
              component={manuallog}/>
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/task"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute path={`${url}/all`} component={AllTask} />
              <AuthorizedRoute path={`${url}/uom/list`} component={UomList} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute
                path={`${url}/create-workflow`}
                component={BPMN}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/view"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute
                path={`${url}/despatch`}
                component={ViewDespatch}
              />
              <AuthorizedRoute path={`${url}/history`} component={History} />
              <AuthorizedRoute path={`${url}/query`} component={Query} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/master"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute path={`${url}/stage`} component={Stage} />
              <AuthorizedRoute path={`${url}/activity`} component={Activity} />
              <AuthorizedRoute path={`${url}/division`} component={Division} />
              <AuthorizedRoute
                path={`${url}/subDivision`}
                component={SubDivision}
              />
              <AuthorizedRoute path={`${url}/location`} component={Location} />
              <AuthorizedRoute path={`${url}/color`} component={Color} />
              <AuthorizedRoute path={`${url}/software`} component={Software} />
              <AuthorizedRoute path={`${url}/user-list`} component={UserList} />
              <AuthorizedRoute path={`${url}/journal`} component={Journal} />
              <AuthorizedRoute path={`${url}/journalnew`} component={JournalNew} />
              <AuthorizedRoute path={`${url}/createjournalnew`} component={NewJournalCreateNew} />
              <AuthorizedRoute path={`${url}/menumapping`} component={MenuMapping} />
              <AuthorizedRoute path={`${url}/samplemenu`} component={SampleMenu} />
              <AuthorizedRoute path={`${url}/BookMasterDetails`} component={BookMasterDetails} />

              BookMaster
             {/* <AuthorizedRoute
                path={`${url}/createjournal`}
                component={JournalCreate}
              /> */}
              <AuthorizedRoute
                path={`${url}/createjournal`}
                component={NewJournalCreate}
              />
              <AuthorizedRoute path={`${url}/tool`} component={Tool} />
              <AuthorizedRoute
                path={`${url}/createtool`}
                component={ToolCreate}
              />
              <AuthorizedRoute
                path={`${url}/templateuploadcreate`}
                component={templeteUploaderCreate}
              />
              <AuthorizedRoute path={`${url}/norms`} component={Norms} />
              <AuthorizedRoute
                path={`${url}/createnorms`}
                component={NormsCreate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/notifications`}
                component={Notifications}
              />
              <AuthorizedRoute
                exact
                path={`${url}/createnotifications`}
                component={CreateNotifications}
              />
              <AuthorizedRoute
                exact
                path={`${url}/notificationtemplate`}
                component={NotificationsTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/createnotificationtemplate`}
                component={CreateNotificationsTemplate}
              />
               <AuthorizedRoute
                exact
                path={`${url}/emailtemplatewms`}
                component={EmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/createemailtemplate`}
                component={CreateEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/editemailtemplate/:id`}
                component={EditEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/emailtemplatewms`}
                component={EmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/createemailtemplate`}
                component={CreateEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/editemailtemplate/:id`}
                component={EditEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/senderemail`}
                component={SenderEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/senderemailcreate`}
                component={CreateSenderEmailTemplate}
              />
              <AuthorizedRoute
                exact
                path={`${url}/checklist`}
                component={CheckListMaster}
              />
              <AuthorizedRoute
                exact
                path={`${url}/checklistcreate`}
                component={CreateCheckListMaster}
              />

              {/* customer setup master */}
              <AuthorizedRoute path={`${url}/customersetup`} component={CustomerSetup} />
              <AuthorizedRoute path={`${url}/pmtlsetup`} component={WOUserSetup} />
              <AuthorizedRoute path={`${url}/customersetup/new`} component={CustomerTimeline} />
              <AuthorizedRoute path={`${url}/proddespmailsetup`} component={ProdDespatchCCSetup} />
              <AuthorizedRoute path={`${url}/campussignalsend`} component={CAMPUSSignalSend} />
              
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/configuration"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute
                path={`${url}/activity`}
                component={ActivityConfig}
              />
              <AuthorizedRoute path={`${url}/tools`} component={ToolsConfig} />
              <AuthorizedRoute path={`${url}/ftp`} component={FtpConfig} />
              <AuthorizedRoute
                path={`${url}/software`}
                component={SoftwareConfig}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/uom"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute path={`${url}/list`} component={UomList} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/trigger"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute path={`${url}/email`} component={EmailTrigger} />
              <AuthorizedRoute
                path={`${url}/trackit`}
                component={TrackitTrigger}
              />
              <AuthorizedRoute
                path={`${url}/ftpdownloadstatus`}
                component={DownloadManuscript}
              />
              <AuthorizedRoute
                path={`${url}/activitytrack`}
                component={ActivityTrack}
              />
              <AuthorizedRoute
                path={`${url}/activityinterval`}
                component={ActivityInterval}
              />
              <AuthorizedRoute
                path={`${url}/toolsaudit`}
                component={RolesUpload}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route path="/Manuscriptstatus" component={Manuscriptstatus} />
        <AuthorizedRoute path="/filesinfo" component={Files} />
        <AuthorizedRoute path="/statusManager" component={ProductionOptionsDetails} />
        <AuthorizedRoute
          path={`/downloaduploadmanuscript`}
          component={DownloadUploadManuscript}
        />
        {/* new_itracks */}
        <Route
          path="/itracks"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute
                path={`${url}/metadata`}
                component={ItrackMetaDataPage}
              />
              <AuthorizedRoute
                path={`${url}/feedbackview`}
                component={Feedbackview}
              />
              <AuthorizedRoute
                path={`${url}/feedback`}
                component={ItrackFeedBackPage}
              />
              <AuthorizedRoute
                path={`${url}/7D`}
                component={ItrackD7Analysis}
              />
              <AuthorizedRoute path={`${url}/2D`} component={Appreciation} />
              <AuthorizedRoute
                path={`${url}/qualityreport`}
                component={QualityReport}
              />
              <AuthorizedRoute
                path={`${url}/dashboarditrack`}
                component={DashboardItrack}
              />
              <AuthorizedRoute
                path={`${url}/appreciationreport`}
                component={AppreciationReport}
              />
              <AuthorizedRoute
                path={`${url}/misreport`}
                component={MISReport}
              />
              <AuthorizedRoute
                path={`${url}/qtrmisreport`}
                component={QuarterMIS}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/production"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute path={`${url}/jobnorms`} component={jobnorms} />
              <AuthorizedRoute
                path={`${url}/normsconfig`}
                component={JobConfiguration}
              />
              <AuthorizedRoute
                path={`${url}/manuallogistics`}
                component={ManualLogistics}
              />
              <AuthorizedRoute
                path={`${url}/summaryreport`}
                component={SummaryReport}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path="/masterscreen"
          render={({ match: { url } }) => (
            <Switch>
              <AuthorizedRoute
                path={`${url}/mapping`}
                component={MasterScreen}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        />
        {/* new_itracks */}
        {/* new_iAspire */}
        <Route path="/iaspire" component={IAspireRoutes} />
        {/* new_iAspire */}
        {/* sales_pmo */}
        <Route path="/salespmo" component={SalesPMORoutes} />
        {/* sales_pmo */}

        <Route path="/cupelement" component={CUPElementsRoutes} />

        <Route path="/ialt" component={Ialt} />

        {/* For Dev and Testing purpose Added directly as dummy */}
        <Route path="/bulkupload" component={WOBulkUpload} />

        <AuthorizedRoute path="/cupauthorupload" component={CupAuthorUpload} />

        <Route path="/newwip" component={NewWIPReport} />
        <Route path="/otd" component={NewOTDReport} />
        <Route path="/acsauto" component={ACSAutomationPage}/>

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}
