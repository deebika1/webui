import { lazy } from "react";

export const Dashboard = lazy(() => import("./shared/components/dashboard"));

export const Login = lazy(() => import("./shared/common/login"));

export const LandingPage = lazy(
  () => import("./shared/components/landingPage")
);

export const AllTask = lazy(() =>
  import("./shared/components/task/allTask").then(({ AllTask }) => ({
    default: AllTask,
  }))
);

export const WorkOrderInfo = lazy(() =>
  import("./shared/components/woi/create").then(({ WorkOrderInfo }) => ({
    default: WorkOrderInfo,
  }))
);

// Dynamic Workorder
export const WorkOrderInfoDynamic = lazy(() =>
  import("./shared/components/woi/createDynamic").then(({ WorkOrderInfoDynamic }) => ({
    default: WorkOrderInfoDynamic,
  }))
);

export const WorkOrderStageDynamic = lazy(() =>
  import("./shared/components/woi/stage/addstage")
);
export const WorkOrderIncomingiTrack = lazy(() =>
  import("./shared/components/woi/incoming/addsubjob")
);

export const WOList = lazy(() =>
  import("./shared/components/woi/list").then(({ WOList }) => ({
    default: WOList,
  }))
);

export const BPMN = lazy(() => import("./shared/components/bpmn"));

export const Activity = lazy(() =>
  import("./shared/components/masters/activity").then(({ Activity }) => ({
    default: Activity,
  }))
);

export const Stage = lazy(() =>
  import("./shared/components/masters/stage").then(({ Stage }) => ({
    default: Stage,
  }))
);

export const Division = lazy(() =>
  import("./shared/components/masters/divsion").then(({ Division }) => ({
    default: Division,
  }))
);

export const SubDivision = lazy(() =>
  import("./shared/components/masters/subdivsion").then(({ SubDivision }) => ({
    default: SubDivision,
  }))
);

export const Location = lazy(() =>
  import("./shared/components/masters/location").then(({ Location }) => ({
    default: Location,
  }))
);

export const MenuMapping = lazy(() =>
  import("./shared/components/masters/menumapping").then(({ MenuMapping }) => ({
    default: MenuMapping,
  }))
);

export const SampleMenu = lazy(() =>
  import("./shared/components/masters/samplemenu").then(({ SampleMenu }) => ({
    default: SampleMenu,
  }))
);

export const Color = lazy(() =>
  import("./shared/components/masters/color").then(({ Color }) => ({
    default: Color,
  }))
);

export const Software = lazy(() =>
  import("./shared/components/masters/software").then(({ Software }) => ({
    default: Software,
  }))
);

export const ActivityConfig = lazy(() =>
  import("./shared/components/configuration/activity").then(
    ({ ActivityConfig }) => ({ default: ActivityConfig })
  )
);

export const ToolsConfig = lazy(() =>
  import("./shared/components/configuration/tools").then(({ ToolsConfig }) => ({
    default: ToolsConfig,
  }))
);

export const FtpConfig = lazy(() =>
  import("./shared/components/configuration/ftp").then(({ FtpConfig }) => ({
    default: FtpConfig,
  }))
);

export const Files = lazy(() =>
  import("./shared/components/files/index").then(({ Files }) => ({
    default: Files,
  }))
);

export const SoftwareConfig = lazy(() =>
  import("./shared/components/configuration/software").then(
    ({ SoftwareConfig }) => ({ default: SoftwareConfig })
  )
);

export const templeteUploader = lazy(() =>
  import("./shared/components/masters/templateUploader").then(
    ({ templeteUploader }) => ({ default: templeteUploader })
  )
);

export const UserList = lazy(() =>
  import("./shared/components/masters/user_list").then(({ UserList }) => ({
    default: UserList,
  }))
);
export const ViewDespatch = lazy(() =>
  import("./shared/components/task/View/despatch/index").then(
    ({ ViewDespatch }) => ({ default: ViewDespatch })
  )
);

export const History = lazy(() =>
  import("./shared/components/task/View/history").then(({ History }) => ({
    default: History,
  }))
);
export const Query = lazy(() =>
  import("./shared/components/task/View/query").then(({ Query }) => ({
    default: Query,
  }))
);

export const NotFound = lazy(() => import("./shared/common/404/404"));
export const workFlowList = lazy(() =>
  import("./shared/components/masters/workFlowList").then(
    ({ workFlowList }) => ({ default: workFlowList })
  )
);

export const UomList = lazy(() =>
  import("./shared/components/uomMaster").then(({ UomList }) => ({
    default: UomList,
  }))
);

export const Journal = lazy(() =>
  import("./shared/components/masters/journal/list").then(({ Journal }) => ({
    default: Journal,
  }))
);

export const JournalCreate = lazy(
  () => import("./shared/components/masters/journal/create")
);

export const NewJournalCreate = lazy(() =>
  import('./shared/components/masters/journal/create/new-create')
);

export const JournalNew = lazy(() =>
  import("./shared/components/masters/journalNew/list").then(({ Journal }) => ({
    default: Journal,
  }))
);
export const NewJournalCreateNew = lazy(() =>
  import('./shared/components/masters/journalNew/create/newone-create')
);


export const EmailTrigger = lazy(() =>
  import("./shared/components/aduit/email").then(({ EmailTrigger }) => ({
    default: EmailTrigger,
  }))
);

export const ToolsAudit = lazy(() =>
  import("./shared/components/aduit/toolsaudit").then(({ ToolsAudit }) => ({
    default: ToolsAudit,
  }))
);

export const TrackitTrigger = lazy(() =>
  import("./shared/components/aduit/trackit").then(({ TrackitTrigger }) => ({
    default: TrackitTrigger,
  }))
);
export const Tool = lazy(() =>
  import("./shared/components/masters/tool/list").then(({ Tool }) => ({
    default: Tool,
  }))
);

export const ToolCreate = lazy(
  () => import("./shared/components/masters/tool/create")
);

export const templeteUploaderCreate = lazy(
  () => import("./shared/components/masters/templateUploader/create")
);

export const Norms = lazy(() =>
  import("./shared/components/masters/norms/list").then(({ Norms }) => ({
    default: Norms,
  }))
);
export const NormsCreate = lazy(
  () => import("./shared/components/masters/norms/create")
);

export const ToolSTatus = lazy(() =>
  import("./shared/components/toolsRuuningStatus").then(({ ToolSTatus }) => ({
    default: ToolSTatus,
  }))
);

export const Notifications = lazy(() =>
  import("./shared/components/masters/notification/notifications/list").then(
    ({ Notifications }) => ({ default: Notifications })
  )
);

export const NotificationsTemplate = lazy(() =>
  import(
    "./shared/components/masters/notification/notificationTemplateMaster/list"
  ).then(({ NotificationsTemplate }) => ({ default: NotificationsTemplate }))
);

export const CreateNotifications = lazy(
  () => import("./shared/components/masters/notification/notifications/create")
);

export const CreateNotificationsTemplate = lazy(
  () =>
    import(
      "./shared/components/masters/notification/notificationTemplateMaster/create"
    )
);

export const SenderEmailTemplate = lazy(() =>
  import(
    "./shared/components/masters/notification/senderEmailAddressMaster/list"
  ).then(({ SenderEmailTemplate }) => ({ default: SenderEmailTemplate }))
);

export const CreateSenderEmailTemplate = lazy(
  () =>
    import(
      "./shared/components/masters/notification/senderEmailAddressMaster/create"
    )
);

export const CheckListMaster = lazy(() =>
  import("./shared/components/masters/checklist/list").then(
    ({ CheckListMaster }) => ({ default: CheckListMaster })
  )
);

export const CreateCheckListMaster = lazy(
  () => import("./shared/components/masters/checklist/create")
);

export const DownloadManuscript = lazy(
  () => import("./shared/components/aduit/downloadmanuscript")
);

export const ActivityTrack = lazy(
  () => import("./shared/components/aduit/activitytrack")
);

export const ActivityInterval = lazy(
  () => import("./shared/components/aduit/activityinterval")
);

export const Manuscriptstatus = lazy(
  () => import("./shared/components/aduit/manuscriptstatus")
);

export const IncomingInspectionReport = lazy(
  () => import("./shared/components/report/inspectionreport")
);

export const DespatchFailureReport = lazy(
  () =>
    import(
      "./shared/components/report/despatch-failure-report/despatchfailurereport"
    )
);
export const FTPAuditReport = lazy(
  () => import("./shared/components/report/ftp-audit-report/ftpAuditReport")
);

export const FTPDownloadStatusReport = lazy(
  () =>
    import(
      "./shared/components/report/ftp-download-status-springer/ftpDownloadStatusSpringer"
    )
);

export const ACSFTPDownloadStatusReport = lazy(
  () =>
    import(
      "./shared/components/report/ACS-ftp-download-status-report/acsFTPDownloadStatusReport"
    )
);
export const ProblemTaskApproval = lazy(
  () =>
    import(
      "./shared/components/report/problemtaskapproval/index"
    )
);

export const ACSCopyeditingQue = lazy(
  () =>
    import(
      "./shared/components/report/ACS-copyediting-report/acsCopyeditingQue"
    )
);
export const RolesUpload = lazy(() =>
  import('./shared/components/rolesupload')
);

export const WorkflowConfiguration = lazy(() =>
  import('./shared/components/masters/workFlowList/workflowconfiguration')
);
//./shared/components/report/despatch-failure-report

export const WipEngineActivityReport = lazy(
  () =>
    import(
      "./shared/components/report/WIP-Engine-Activities/wipengineactivityreport"
    )
);
export const WMSConfiguration = lazy(
  () => import("./shared/components/masters/wmsconfiguration")
);

export const ToolsMasterScreen = lazy(
  () => import("./shared/components/report/tools-master-screen")
);

export const FTPstatus = lazy(
  () => import("./shared/components/report/ftp-status")
);

export const MasterScreen = lazy(
  () => import("./shared/components/masterscreenmap")
);

export const DownloadUploadManuscript = lazy(
  () => import("./shared/components/aduit/downloaduploadmanuscript")
);

export const Masterworkflow = lazy(
  () => import("./shared/components/masters/masterworkflow")
);

export const RunningOnTools = lazy(
  () => import("./shared/components/runningonfiles")
);

export const OverallHistory = lazy(
  () => import("./shared/components/report/overallhistory")
);

export const AcknowledgementReport = lazy(
  () => import("./shared/components/report/Acknowledgement-report")
);

export const Oupjournal = lazy(
  () => import("./shared/components/oupjournal")
);

export const JobsheetSpringer = lazy(
  () => import("./shared/components/report/jobsheetspringer")
);

// <----------new_itracks
export const ItrackMetaDataPage = lazy(
  () => import("./shared/components/iTracks/metaData")
);
export const ItrackFeedBackPage = lazy(
  () => import("./shared/components/iTracks/feedback")
);
export const ItrackD7Analysis = lazy(
  () => import("./shared/components/iTracks/D7analysis/create/index")
);
export const Feedbackview = lazy(
  () => import("./shared/components/iTracks/D7analysis/view")
);
export const Appreciation = lazy(
  () => import("./shared/components/iTracks/appreciation")
);
export const Timeline = lazy(
  () => import("./shared/components/iTracks/metaData/timeline")
);
export const QualityReport = lazy(
  () => import("./shared/components/iTracks/qualityreport/index")
);
export const DashboardItrack = lazy(
  () => import("./shared/components/iTracks/Dashboard")
);
export const CustomerCopy = lazy(() =>
  import('./shared/components/iTracks/feedback/customercopy')
);
export const CustomerSetup = lazy(() => import('./shared/components/iTracks/customersetup'));
export const CustomerTimeline = lazy(() => import('./shared/components/iTracks/customersetup/customergroup'))
export const workordertimeline = lazy(() => import('./shared/components/salesPMO/workordersummary/workorderoption'));
export const WorkOrderSummary = lazy(() => import('./shared/components/salesPMO/workordersummary'));
export const RfiEntry = lazy(() => import('./shared/components/salesPMO/rateentry/Rfidata'))
export const ProdDespatchCCSetup = lazy(() => import('./shared/components/iTracks/customersetup/prodDespatchMailCCSetups'));

// new_itracks------->

export const AppreciationReport = lazy(
  () =>
    import("./shared/components/iTracks/qualityreport/Appreciationreport/index")
);

export const MISReport = lazy(
  () => import("./shared/components/iTracks/qualityreport/MIS/index")
);
// new_itracks------->

// <----------iproductivity
export const Jobnorms = lazy(
  () => import("./shared/components/iTracks/iproductivity/jobnorms")
);

// manual logistic entry
export const manuallog = lazy(
  () => import("./shared/components/manuallogistic/index")
)

export const JobConfiguration = lazy(
  () =>
    import(
      "./shared/components/iTracks/iproductivity/jobnorms/jobconfiguration"
    )
);

export const SummaryReport = lazy(
  () => import("./shared/components/iTracks/iproductivity/report/summaryreport")
);
export const ManualLogistics = lazy(
  () =>
    import("./shared/components/iTracks/iproductivity/jobnorms/manualLogistics")
);

// iproductivity------->

// <----------iaspire

export const QuarterMIS = lazy(
  () => import("./shared/components/iTracks/qualityreport/QuarterMIS/index")
);

// iaspire-------->

export const BookMaster = lazy(
  () => import("./shared/components/masters/book/index")
);

export const BookMasterDetails = lazy(
  () => import("./shared/components/masters/book/bookdetails")
);

export const CupAuthorUpload = lazy(
  () => import("./shared/components/cupAuthorUpload/index")
);

export const IndividualProductivityReport = lazy(
  () => import("./shared/components/report/individual-productivity-report/index")
);

export const NoteFromVendorReport = lazy(
  () => import("./shared/components/report/NoteFromVendor-report")
);

export const OverallFileReport = lazy(
  () => import("./shared/components/report/Overall-File-Report")
);

export const NewWIPReport = lazy(
  () => import("./shared/components/newWIPReport/index")
);
export const NewOTDReport = lazy(
  () => import("./shared/components/newOTDReport/index")
);

export const ACSAutomationPage = lazy(
  () => import("./shared/components/salesPMO/raiseRFI/ACSAutomation/index")
);

export const EngineFailureReport = lazy(
  () => import("./shared/components/report/Engine-Failure-report")
);

export const DoNotPublishReport = lazy(
  () => import("./shared/components/report/DoNotPublish-report")
);
export const ConvertFilesReport = lazy(
  () => import("./shared/components/report/convert-files-report")
);

export const ReadyXMLTracker = lazy(
  () =>
    import(
      "./shared/components/report/Ready-XML-tracker/readyXMLTracker"
    ));

export const ProblemTask = lazy(
  () => import("./shared/components/task/problemtask")
);

export const ProblemDetails = lazy(
  () => import("./shared/components/task/problemtask/problemtask")
);

export const Preview = lazy(
  () => import("./shared/components/task/problemtask/preview")
);

export const FTPFailureReport = lazy(
  () => import("./shared/components/report/ftp-failure-report")
);
export const JournalSignal = lazy(
  () => import("./shared/components/report/journal-signal")
);

export const CAMSAcknowledgementReport = lazy(
  () => import("./shared/components/report/cams-acknowledgement-report")
);

export const ShiftWiseInflowReport = lazy(
  () => import("./shared/components/report/shiftwise-inflow-report")
);

export const ShiftWiseOutflowReport = lazy(
  () => import("./shared/components/report/shiftwise-outflow-report")
);
export const CAMPUSSignalSend = lazy(() =>
  import("./shared/components/masters/campusSignal")
);

export const CampusAuditReport = lazy(
  () => import("./shared/components/report/Campus-audit-report")
);