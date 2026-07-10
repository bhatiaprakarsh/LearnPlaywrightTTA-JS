from pathlib import Path
from zipfile import ZipFile

base = Path('e:\\CODING\\LearnPlaywrightTTA\\chapter_00_GENAI')
plan_folder = base / 'Test Plan'
cases_folder = base / 'Test Cases'
plan_folder.mkdir(exist_ok=True)
cases_folder.mkdir(exist_ok=True)

def write_docx(path, paragraphs):
    with ZipFile(path, 'w') as z:
        z.writestr('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n    <Default Extension="xml" ContentType="application/xml"/>\n    <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>\n</Types>')
        z.writestr('_rels/.rels', '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>\n</Relationships>')
        body = '<w:body>'
        for p in paragraphs:
            body += f'<w:p><w:r><w:t>{p}</w:t></w:r></w:p>'
        body += '</w:body>'
        z.writestr('word/document.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' + body + '</w:document>')


def write_xlsx(path, rows):
    with ZipFile(path, 'w') as z:
        z.writestr('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n    <Default Extension="xml" ContentType="application/xml"/>\n    <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n    <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n    <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n</Types>')
        z.writestr('_rels/.rels', '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="/xl/workbook.xml"/>\n</Relationships>')
        z.writestr('xl/_rels/workbook.xml.rels', '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n</Relationships>')
        z.writestr('xl/workbook.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">\n  <sheets>\n    <sheet name="TestCases" sheetId="1" r:id="rId1"/>\n  </sheets>\n</workbook>')
        rows_xml = '<sheetData>'
        for r_idx, row in enumerate(rows, start=1):
            rows_xml += f'<row r="{r_idx}">'
            for c_idx, cell in enumerate(row, start=1):
                col = chr(ord('A') + c_idx - 1)
                rows_xml += f'<c r="{col}{r_idx}" t="str"><v>{cell}</v></c>'
            rows_xml += '</row>'
        rows_xml += '</sheetData>'
        z.writestr('xl/worksheets/sheet1.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' + rows_xml + '</worksheet>')
        z.writestr('xl/styles.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"/>')

plan_paragraphs = [
    'Test Plan for VWO.com',
    'Objective: Validate VWO.com functionality as an enterprise CRO platform by ensuring core experimentation, targeting, analytics, role-based access, and user flows perform reliably across supported browsers and devices while meeting security, usability, and data integrity requirements.',
    'Scope: Include end-to-end validation of VWO core modules: authentication, experiment creation, variation management, audience targeting, test launch/stop workflows, reporting dashboards, user roles, and basic API/status handling. Exclude non-product third-party integrations, back-end data warehouse validation beyond UI data consistency, and deep infrastructure/performance tuning outside defined staging environments.',
    'Inclusions: Login and authentication workflows; Experiment/A-B test creation, editing, and deletion; Variation setup and preview; Audience segmentation and targeting rules; Test lifecycle management (start, pause, stop); Result dashboards, conversion reporting, and status codes; Role-based access control: admin, editor, viewer; Boundary and negative validation for form fields and UI behavior; Compatibility across desktop browsers and device emulation; Regression and exploratory coverage for UI interactions.',
    'Test Environments: Browsers: Chrome latest, Firefox latest, Edge latest, Safari latest; OS: Windows 11, macOS 13; Devices: desktop viewport, tablet/mobile viewport emulation; Network: normal, slow 3G, offline validation for error handling; Test systems: staging VWO application, secure test accounts; Tools: BrowserStack / local browser grid, Jira / test management tool, console/network logging.',
    'Defect Reporting Procedure: Log defects in Jira with reproducible steps, environment, severity, priority, screenshots, and console/network capture; Use standard severity levels: Critical, High, Medium, Low; Verify reproducibility before logging; Assign to development with component/tagging and link to test case; Include actual vs expected results and any relevant data; Update defect status through lifecycle: Open > In Progress > Fixed > Retest > Closed.',
    'Test Strategy: Functional testing for each user flow and feature; Regression testing for prior release test cases; UI validation for page flow, button/text behavior, form validation; Data validation for experiment and result display; Negative testing for invalid inputs, unauthorized access, missing values; Boundary testing for field limits and maximum variation counts; Role-based access verification for admin/editor/viewer behavior; Exploratory testing to uncover edge cases in experiment setup.',
    'Test Schedule: Planning & review: Day 1; Test design & case creation: Days 2–3; Environment setup & sanity testing: Day 4; Functional execution: Days 5–8; Regression execution: Days 9–10; Defect triage & retest: Days 11–12; Closure & reporting: Day 13.',
    'Test Deliverables: Test Plan document; Test Case workbook; Execution status report; Defect log; Regression summary; Test closure report.',
    'Entry and Exit Criteria: Entry Criteria: PRD and templates available; Test environments configured; Test accounts created; Application build deployed to staging; Required test data and access credentials available. Exit Criteria: All planned test cases executed or formally deferred; All critical/high defects resolved or accepted; Regression pass rate meets threshold; Test summary report completed; Release recommendation documented.',
    'Test Execution: Execute test cases based on scenario sequence; Record pass/fail status and evidence; Log defects for failed cases with full reproduction; Retest fixed defects and verify resolution; Perform regression on impacted flows.',
    'Test Closure: Review execution metrics and defect trends; Confirm all entry/exit criteria met; Document open issues, risk areas, and recommendations; Archive test artifacts and update stakeholders.',
    'Tools: Jira for defect management; Test management tool or spreadsheet for test cases; BrowserStack / local browser for cross-browser testing; Postman for API/status validation; Screen capture and logging tools for evidence.'
]

write_docx(plan_folder / 'Test Plan.docx', plan_paragraphs)

rows = [
    ['Scenario TID','Test Case ID','Test Case Description','Test Steps','Status','Comments'],
    ['TS-01','TC-01.1','Verify valid login succeeds for authorized user','1. Navigate to VWO login page, 2. Enter valid email, 3. Enter valid password, 4. Click Sign in','', ''],
    ['TS-01','TC-01.2','Verify login fails with invalid password','1. Navigate to login page, 2. Enter valid email, 3. Enter invalid password, 4. Click Sign in','', ''],
    ['TS-01','TC-01.3','Verify forgot password flow initiates reset email','1. Navigate to login page, 2. Click Forgot Password, 3. Enter registered email, 4. Submit request','', ''],
    ['TS-02','TC-02.1','Verify new A/B experiment can be created with valid name and URL','1. Login, 2. Navigate to Testing module, 3. Click Create New Test, 4. Enter valid experiment name, 5. Enter valid URL, 6. Save','', ''],
    ['TS-02','TC-02.2','Verify validation error appears when experiment name is blank','1. Login, 2. Create new experiment, 3. Leave name blank, 4. Enter valid URL, 5. Save','', ''],
    ['TS-02','TC-02.3','Verify invalid URL is rejected during experiment creation','1. Login, 2. Create new experiment, 3. Enter valid name, 4. Enter malformed URL, 5. Save','', ''],
    ['TS-02','TC-02.4','Verify maximum number of variations can be added and boundary enforced','1. Login, 2. Create experiment, 3. Add variations until max limit, 4. Attempt additional variation','', ''],
    ['TS-03','TC-03.1','Verify audience targeting by browser type applies correctly','1. Open experiment, 2. Navigate to targeting, 3. Add browser rule, 4. Save, 5. Confirm rule present','', ''],
    ['TS-03','TC-03.2','Verify country segmentation works for selected region','1. Open experiment, 2. Add country filter, 3. Save, 4. Validate filter in summary','', ''],
    ['TS-03','TC-03.3','Verify invalid audience criteria input is rejected','1. Open targeting settings, 2. Enter invalid rule value, 3. Save','', ''],
    ['TS-04','TC-04.1','Verify variation can be added to an experiment','1. Open existing experiment, 2. Add new variation, 3. Enter valid variation name, 4. Save','', ''],
    ['TS-04','TC-04.2','Verify variation preview displays expected content','1. Open variation settings, 2. Click Preview, 3. Confirm preview loads','', ''],
    ['TS-04','TC-04.3','Verify variation deletion removes it from experiment setup','1. Open experiment, 2. Delete variation, 3. Confirm removal','', ''],
    ['TS-05','TC-05.1','Verify experiment can be started successfully','1. Open created experiment, 2. Click Start/Run, 3. Confirm status changes to Running','', ''],
    ['TS-05','TC-05.2','Verify experiment can be stopped/paused successfully','1. Start experiment, 2. Click Stop/Pause, 3. Confirm status changes','', ''],
    ['TS-05','TC-05.3','Verify experiment status reflects current lifecycle state','1. View experiment list, 2. Confirm status label for Running, Paused, Draft','', ''],
    ['TS-06','TC-06.1','Verify experiment results dashboard displays experiment metrics','1. Navigate to Reports, 2. Select active experiment, 3. Confirm metrics display','', ''],
    ['TS-06','TC-06.2','Verify conversion count updates after valid event data','1. Run experiment, 2. Generate test conversion event, 3. Confirm count increments','', ''],
    ['TS-06','TC-06.3','Verify empty report state displays appropriate message when no data exists','1. Open report for new experiment with no traffic, 2. Confirm no-data message','', ''],
    ['TS-07','TC-07.1','Verify admin user has full access to all experiment actions','1. Login as admin, 2. Navigate experiments, 3. Verify create/edit/delete/start/stop privileges','', ''],
    ['TS-07','TC-07.2','Verify editor user can edit experiments but cannot perform admin-only actions','1. Login as editor, 2. Open experiment, 3. Verify edit actions allowed, admin actions restricted','', ''],
    ['TS-07','TC-07.3','Verify viewer user can view experiment details only','1. Login as viewer, 2. Open experiment, 3. Confirm edit controls unavailable','', ''],
    ['TS-07','TC-07.4','Verify guest or unknown role is denied access or redirected appropriately','1. Login as guest/invalid role, 2. Attempt access, 3. Confirm access denied message','', '']
]
write_xlsx(cases_folder / 'TestCases.xlsx', rows)
print('files written')
