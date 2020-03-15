

function IsSameAsPresent(FormsPH_ChkSameasNewPresent) { // IsSameAsNewPresent Is Permanent Address the same as Present Address ? 


    if (FormsPH_ChkSameasNewPresent.checked) {


        $("#FormsPH_TrCorrespondenceAddress").hide();

        ValidatorEnable(document.getElementById('FormsPH_RegPresentPinCode'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPresentDistrictcode0'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPermanentSubdistrictcode'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPermanentAddredd'), true);

        ValidatorEnable(document.getElementById('FormsPH_ReqPresentAddress'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPresentPinCode0'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPresentSubdistrictcode0'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfvPresentVillageCode'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPresentddlPresentStatecode'), false);


    }
    else {
        $("#FormsPH_lblcommunicationsAddress").text($("#FormsPH_hdnlblcommunicationsAddress").val());
        $("#FormsPH_TrCorrespondenceAddress").show();

        ValidatorEnable(document.getElementById('FormsPH_ReqPermanentAddredd'), true);
        document.getElementById('FormsPH_RegPresentPinCode').enabled = true;
        document.getElementById('FormsPH_ReqPresentDistrictcode0').enabled = true;
        document.getElementById('FormsPH_ReqPermanentSubdistrictcode').enabled = true;
        document.getElementById('FormsPH_rfvVillageCode').enabled = true;

        document.getElementById('FormsPH_ReqPresentAddress').enabled = true;
        document.getElementById('FormsPH_ReqPresentSubdistrictcode0').enabled = true;
        document.getElementById('FormsPH_ReqPresentPinCode0').enabled = true;

        ValidatorEnable(document.getElementById('FormsPH_ReqPresentddlPresentStatecode'), true);
        ValidatorEnable(document.getElementById('FormsPH_rfvPresentVillageCode'), true);

    }
    $("#FormsPH_txtPresentAddress").val('');
    $("#FormsPH_ddlPresentStatecode").val('');
    $("#FormsPH_ddlPresentDistrictcode").val('');
    $("#FormsPH_ddlPresentSubdistrictcode").val('');
    $("#FormsPH_txtPresentVillageCode").val('');
    $("#FormsPH_txtPresentPinCode").val('');
}

function IsPresent() {


    if (FormsPH_clkaddress.checked) {

        $("#SameasPresentaddress").show();
    } else {
        $("#SameasPresentaddress").hide();
    }
}


function SetPercentageMandetoryOnLoad() {
    if ($("#Registration_Qualification_Details__QualificationType").val() != undefined) {
        if ($("#Registration_Qualification_Details__QualificationType").val().toUpperCase() == "PHD" || $("#Registration_Qualification_Details__QualificationType").val().toUpperCase() == "M.PHILL") {
            $("#Registration_Qualification_Details__Percentage").removeAttr("MOLM");
            $("#Registration_Qualification_Details__Percentage").attr("readonly", true);
        }

        else {
            if ($("#Registration_Qualification_Details__ResultCode").val().toUpperCase() != "A") {
                $("#Registration_Qualification_Details__Percentage").attr("MOLM", "C");
                $("#Registration_Qualification_Details__Percentage").removeAttr("readonly");
            }
        }
    }
}

function UIDFetched() {
    var t_UID = $("#RegistrationForm__UIDSearch").val();
    var t_UIDData;
    var SectionTable, FullName, FullName_LL, DOB, Address, Street, Building, Locality, Landmark, District, Taluka, Village, PinCode, IMG;
    SectionTable = "RegistrationForm";
    FullName = "Name";
    FullName_LL = "Name_LL";
    DOB = "DOB";
    Address = "PresentAddress";
    Street = "PresentStreet";
    Building = "PresentBuilding";
    Locality = "PresentLocality";
    Landmark = "PresentLandmark";
    District = "PresentDistrictcode";
    Taluka = "PresentSubdistrictcode";
    Village = "PresentVillageCode";
    PinCode = "PresentPinCode";
    IMG = "HeadImage";

    t_UIDData = MOLGetUID(t_UID, SectionTable, FullName, FullName_LL, DOB, Address, Street, Building, Locality, Landmark, District, Taluka, Village, PinCode, IMG, "Age", "Gender", "Mobile");
}

function IsPermanentSameasPresentOnLoad() {
    var object = $("#RegistrationForm__SameasPresent")
    $('input[type=checkbox]').each(function () {
        if (this.id == "RegistrationForm__SameasPresent" && this.checked) {
            $("#PermanentAddr").hide();

            $("#RegistrationForm__PermanentAddress").removeAttr("MOLM");
            $("#RegistrationForm__PermanentStreet").removeAttr("MOLM");
            $("#RegistrationForm__PermanentStatecode").removeAttr("MOLM");
            $("#RegistrationForm__PermanentDistrictcode").removeAttr("MOLM");
            $("#RegistrationForm__PermanentSubdistrictcode").removeAttr("MOLM");
            $("#RegistrationForm__PermanentPinCode").removeAttr("MOLM");
        }
        else {
            $("#PermanentAddr").show();

            $("#RegistrationForm__PermanentAddress").attr("MOLM", "C");
            $("#RegistrationForm__PermanentStreet").attr("MOLM", "C");
            $("#RegistrationForm__PermanentStatecode").attr("MOLM", "C");
            $("#RegistrationForm__PermanentDistrictcode").attr("MOLM", "C");
            $("#RegistrationForm__PermanentSubdistrictcode").attr("MOLM", "C");
            $("#RegistrationForm__PermanentPinCode").attr("MOLM", "C");
        }
    });
}

function CheckPercentage() {
    var val = $(this).val();
    if (val.indexOf('.') == -1) {
        if (val > 100) {
            $(this).val(val.substring(0, val.length - 1));
            return false;
        }
    }
}


function ddldistrict() {
    var id = document.getElementById('FormsPH_ddlPermanentDistrictCodeOfHusband').value;

    document.getElementById('FormsPH_ddlPermanentDistrictCodedivision').value = id;
    document.getElementById('FormsPH_ddlPermanentDistrictCodedivision').disabled = true;
}

function IsMarriedNoofChild(obj) {
    // $("#FormsPH_txtNameAfterMarriage").val('');

    var ddlIsMarried = document.getElementById('FormsPH_ddlIsMarried').value;
    var TDtwindChild = document.getElementById('FormsPH_TDtwindChild');
    var TDtDobChild = document.getElementById('FormsPH_TDtDobChild');
    TDtwindChild.style.display = "none";
    TDtDobChild.style.display = "none";

    ValidatorEnable(document.getElementById('FormsPH_rfvTwinsChildren'), false);
    ValidatorEnable(document.getElementById('FormsPH_rfvDobLastLivingChildren'), false);

    if (ddlIsMarried == "Y") {
        var NoOfChildredn = document.getElementById('FormsPH_txtNoofChildren').value;
        if (NoOfChildredn >= 1) {

            TDtDobChild.style.display = "none";
            ValidatorEnable(document.getElementById('FormsPH_rfvDobLastLivingChildren'), false);
        }
        else {
            document.getElementById('FormsPH_txtDobLastLivingChildren').value = '';
        }

        if (NoOfChildredn >= 2) {
            ValidatorEnable(document.getElementById('FormsPH_rfvTwinsChildren'), false);
            TDtwindChild.style.display = "none";
        }


    }
    else {
    }


}
function IsGovEmpExch() {

    var ddlIsGovEmpExch = document.getElementById('FormsPH_ddlIsGovEmpExch').value;
    var trGovEmpExchReg = document.getElementById('FormsPH_trGovEmpExchReg');


    if (ddlIsGovEmpExch == "Y") {

        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchName'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegDate'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegUptp'), true);
        trGovEmpExchReg.style.display = "";


    }
    else {


        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchName'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegDate'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGovEmpExchRegUptp'), false);
        trGovEmpExchReg.style.display = "none";


        $("#FormsPH_txtGovEmpExchRegNo").val('');
        $("#FormsPH_txtGovEmpExchName").val('');
        $("#FormsPH_txtGovEmpExchRegDate").val('');
        $("#FormsPH_txtGovEmpExchRegupto").val('');
        $("#FormsPH_FileUploadGovEmpExchRegCertificate").val('');
        $("#FormsPH_ddlGovEmpExchName").val('');

    }



}


function IsDependantBattleCasualty(object) {
    var val = $("#FormsPH_ddllblDependantBattleCasualty").val();
    var TdDependantBattleCasualtyReason = $("#FormsPH_TdDependantBattleCasualtyReason").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_TdDependantBattleCasualtyReason").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqDependantBattleCasualtyReason'), true);
    }
    else {
        $("#FormsPH_TdDependantBattleCasualtyReason").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqDependantBattleCasualtyReason'), false);
        $("#FormsPH_ddllblDependantBattleCasualtyReason").val('');
    }
}

function IsNationalCadet(object) {
    var val = $("#FormsPH_ddlNationalCadet").val();
    var TdNationalCadetYear = $("#FormsPH_TdNationalCadetYear").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_TdNationalCadetYear").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqNationalCadetYear'), true);
    }
    else {
        $("#FormsPH_TdNationalCadetYear").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqNationalCadetYear'), false);
        $("#FormsPH_txtNationalCadetYear").val('');
    }
}
function IsVillageGroupInspector(object) {
    var val = $("#FormsPH_ddlVillageGroupInspector").val();
    var TdVillageGroupInspectorYear = $("#FormsPH_TdVillageGroupInspectorYear").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_TdVillageGroupInspectorYear").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqVillageGroupInspectorYear'), true);
    }
    else {
        $("#FormsPH_TdVillageGroupInspectorYear").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqVillageGroupInspectorYear'), false);
        $("#FormsPH_txtVillageGroupInspectorYear").val('');
    }
}

function IsCensusOrganisation(object) {
    var val = $("#FormsPH_ddlCensusOrganisation").val();
    var TdCensusOrganisationYear = $("#FormsPH_TdCensusOrganisationYear").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_TdCensusOrganisationYear").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqCensusOrganisationYear'), true);
    }
    else {
        $("#FormsPH_TdCensusOrganisationYear").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqCensusOrganisationYear'), false);
        $("#FormsPH_txtCensusOrganisationYear").val('');
    }
}

function IsGOMEmployee(object) {

    var val = $("#FormsPH_ddlIsGOMEmployee").val();
    var TdGOMEmployeeNameDept = $("#FormsPH_TdGOMEmployeeNameDept").val();
    var TrGOMEmployeeDesignation = $("#FormsPH_TrGOMEmployeeDesignation").val();
    var TrGOMEmployeeServiceYear = $("#FormsPH_TrGOMEmployeeServiceYear").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_TdGOMEmployeeNameDept").show();
        $("#FormsPH_TrGOMEmployeeDesignation").show();
        $("#FormsPH_TrGOMEmployeeServiceYear").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeNameDept'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeDesignation'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeJoiningDate'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeServiceYear'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeNOC'), true);
    }

    else {
        $("#FormsPH_TdGOMEmployeeNameDept").hide();
        $("#FormsPH_TrGOMEmployeeDesignation").hide();
        $("#FormsPH_TrGOMEmployeeServiceYear").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeNameDept'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeDesignation'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeJoiningDate'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeServiceYear'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOMEmployeeNOC'), false);
        $("#FormsPH_txtGOMEmployeeNameDept").val('');
        $("#FormsPH_txtGOMEmployeeDesignation").val('');
        $("#FormsPH_txtGOMEmployeeJoiningDate").val('');
        $("#FormsPH_txtGOMEmployeeServiceYear").val('');
        $("#FormsPH_ddGOMEmployeeNOC").val('0');
    }
}

function IsExservice(object) {
    debugger;
    var val = $("#FormsPH_ddlIsExService").val();
    var txtExServiceYears = $("#FormsPH_txtExServiceYears").val();
    var TrExserviceDateOfDischarge = $("#FormsPH_TrExserviceDateOfDischarge").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_tdExServiceTime").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceYears'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceMonths'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceDays'), true);
        $("#FormsPH_TrExserviceDateOfDischarge").show();

        ValidatorEnable(document.getElementById('FormsPH_ReqExserviceDateOfDischarge'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqExserviceReasoneDischarge'), true);
        //console.log(val);   
    }

    else {
        $("#FormsPH_tdExServiceTime").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceYears'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceMonths'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceDays'), false);
        $("#FormsPH_txtExServiceYears").val('');
        $("#FormsPH_txtExServiceMonths").val('');
        $("#FormsPH_txtExServiceDays").val('');
        $("#FormsPH_TrExserviceDateOfDischarge").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqExserviceDateOfDischarge'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqExserviceReasoneDischarge'), false);
        $("#FormsPH_txtExserviceDateOfDischarge").val('');
        $("#FormsPH_txtExserviceReasoneDischarge").val('');

    }
}

function IsExserviceDischareg(object) {

    var val = $("#FormsPH_ddlIsExserviceDischarge").val();
    //var txtExServiceYears = $("#FormsPH_txtExServiceYears").val();
    var trExServicemenNormalTenure = document.getElementById('FormsPH_trExServicemenNormalTenure');
    var trexservicedischarged = document.getElementById('FormsPH_trexservicedischarged');
    var trsolderWelfareEmpExch = document.getElementById('FormsPH_trsolderWelfareEmpExch');
    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
    var TrExserivceMedicalGround = document.getElementById('FormsPH_TrExserivceMedicalGround');

    var trDischargeCFDetails = document.getElementById('FormsPH_trDischargeCFDetails');

    if (val != "" && val == "N") {
        //$("#FormsPH_tblExServiceTime").hide();
        trExServicemenNormalTenure.style.display = "";

        //document.getElementById('FormsPH_ReqExServiceYears').enabled = true;
        //document.getElementById('FormsPH_ReqExServiceMonths').enabled = true;
        //document.getElementById('FormsPH_ReqExServiceDays').enabled = true;
        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = true;
        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), false);


    }

    else {
        $("#FormsPH_tblExServiceTime").hide();


        // tblExServiceTime.style.display = "none";              
        trExServicemenNormalTenure.style.display = "none";
        trsolderWelfareEmpExch.style.display = "none";
        TrExserivceMedicalGround.style.display = "none";
        trExServicemenNormalTenure.style.display = "none";
        trSolderWelfareEmpExchRegi.style.display = "none";

        trDischargeCFDetails.style.display = "none";

        $("#FormsPH_tblExServiceTime").hide();
        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
        document.getElementById('FormsPH_reqExserivceMedicalGround').enabled = false;
        document.getElementById('FormsPH_reqSolderWelfareEmpExch').enabled = false;
        document.getElementById('FormsPH_ReqddlIsExserviceDischarge').enabled = false;
        //document.getElementById('FormsPH_ReqExServiceYears').enabled = false;
        //document.getElementById('FormsPH_ReqExServiceMonths').enabled = false;
        //document.getElementById('FormsPH_ReqExServiceDays').enabled = false;
        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo').enabled = false;
        document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName').enabled = false;
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate').enabled = false;
        //ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiUptodate'), false);

        document.getElementById('FormsPH_reqDischargeCertificateNo').enabled = false;
        document.getElementById('FormsPH_reqDischargeCertificatedate').enabled = false;

        //$("#FormsPH_txtExServiceYears").val('');
        //$("#FormsPH_txtExServiceMonths").val('');
        //$("#FormsPH_txtExServiceDays").val('');
        $("#FormsPH_ddlExServicemenNormalTenure").val('');
        //$("#FormsPH_ddlIsExserviceDischarge").val('');
        $("#FormsPH_ddlSolderWelfareEmpExch").val('');
        $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
        $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');
        $("#FormsPH_ddlExserivceMedicalGround").val('');

        $("#FormsPH_txtDischargeCertificateNo").val('');
        $("#FormsPH_txtDischargeCertificatedate").val('');


    }
}


function IsExserivceMedicalGround() {
    var ddlExserivceMedicalGround = document.getElementById('FormsPH_ddlExserivceMedicalGround').value;
    var trsolderWelfareEmpExch = document.getElementById('FormsPH_trsolderWelfareEmpExch');
    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
    var TrExserivceMedicalGround = document.getElementById('FormsPH_TrExserivceMedicalGround');
    var trDischargeCFDetails = document.getElementById('FormsPH_trDischargeCFDetails');

    if (ddlExserivceMedicalGround == "Y") {

        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), true);
        trsolderWelfareEmpExch.style.display = "";
        trDischargeCFDetails.style.display = "";

        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificateNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificatedate'), true);
    }
    else {


        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), false);
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo').enabled = false;
        document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName').enabled = false;
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate').enabled = false;
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificateNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificatedate'), false);

        trsolderWelfareEmpExch.style.display = "none";
        trSolderWelfareEmpExchRegi.style.display = "none";
        TrExserivceMedicalGround.style.display = "none";
        trDischargeCFDetails.style.display = "none";
        $("#FormsPH_ddlSolderWelfareEmpExch").val('');
        $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
        $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');

        $("#FormsPH_txtDischargeCertificateNo").val('');
        $("#FormsPH_txtDischargeCertificatedate").val('');
    }
}

function IsExServicemenNormalTenure() {

    var ddlExServicemenNormalTenure = document.getElementById('FormsPH_ddlExServicemenNormalTenure').value;
    var trsolderWelfareEmpExch = document.getElementById('FormsPH_trsolderWelfareEmpExch');
    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
    var TrExserivceMedicalGround = document.getElementById('FormsPH_TrExserivceMedicalGround');
    var trDischargeCFDetails = document.getElementById('FormsPH_trDischargeCFDetails');

    if (ddlExServicemenNormalTenure == "Y") {

        ValidatorEnable(document.getElementById('FormsPH_reqExserivceMedicalGround'), true);
        TrExserivceMedicalGround.style.display = "";
        trsolderWelfareEmpExch.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), true);
        trDischargeCFDetails.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificateNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificatedate'), true);
    }
    else {


        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), true);
        trsolderWelfareEmpExch.style.display = "";
        trDischargeCFDetails.style.display = "";
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo').enabled = false;
        document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName').enabled = false;
        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate').enabled = false;
        document.getElementById('FormsPH_reqExserivceMedicalGround').enabled = false;

        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificateNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqDischargeCertificatedate'), true);

        trSolderWelfareEmpExchRegi.style.display = "none";
        TrExserivceMedicalGround.style.display = "none";
        $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
        $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');
        $("#FormsPH_ddlExserivceMedicalGround").val('');

        $("#FormsPH_txtDischargeCertificateNo").val('');
        $("#FormsPH_txtDischargeCertificatedate").val('');

    }

}

function IsSolderWelfareEmpExch() {

    var ddlSolderWelfareEmpExch = document.getElementById('FormsPH_ddlSolderWelfareEmpExch').value;
    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
    if (ddlSolderWelfareEmpExch == "Y") {

        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName'), true);
        // ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiUptodate'), true);

        trSolderWelfareEmpExchRegi.style.display = "";

    }
    else {


        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName'), false);
        // ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiUptodate'), false);
        trSolderWelfareEmpExchRegi.style.display = "none";
    }
    $("#FormsPH_txtSolderWelfareEmpExchRegiNo").val('');
    $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');
    $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
    // $("#FormsPH_txtSolderWelfareEmpExchRegiUptodate").val('');


}

function IsDependentFreedFighter() {
    var ddlVikramAward = document.getElementById('FormsPH_ddlVikramAward').value;
    var trDependentFreedFighterCF = document.getElementById('FormsPH_trDependentFreedFighterCF');
    if (ddlVikramAward == "Y") {
        trDependentFreedFighterCF.style.display = "none";
    }
    else {
        trDependentFreedFighterCF.style.display = "none";
        $("#FormsPH_FileUploadDependentFreedFighterCF").val('');
    }

}



function ISUKRajyaAndolan() {
    var ddlUKRajyaAndolan = document.getElementById('FormsPH_ddlUKRajyaAndolan').value;
    var trUKRajyaAndolanCF = document.getElementById('FormsPH_trUKRajyaAndolanCF');

    if (ddlUKRajyaAndolan == "Y") {
        trUKRajyaAndolanCF.style.display = "";
    }
    else {
        trUKRajyaAndolanCF.style.display = "none";
        $("#FormsPH_FileUploadUKRajyaAndolanCF").val('');
    }

}

function ISDependentUKRajyaAndolan() {
    var ddlDependentUKRajyaAndolan = document.getElementById('FormsPH_ddlDependentUKRajyaAndolan').value;
    var trDependentUKRajyaAndolanCF = document.getElementById('FormsPH_trDependentUKRajyaAndolanCF');

    if (ddlDependentUKRajyaAndolan == "Y") {
        trDependentUKRajyaAndolanCF.style.display = "";
    }
    else {
        trDependentUKRajyaAndolanCF.style.display = "none";
        $("#FormsPH_FileUploadDependentUKRajyaAndolanCF").val('');
    }

}

function ISPrefEduQual() {

    var ddlPrefEduQual = document.getElementById('FormsPH_ddlPrefEduQual').value;
    var trPrefEduQual = document.getElementById('FormsPH_trPrefEduQual');
    var tdPrefEduQual = document.getElementById('FormsPH_tdPrefEduQual');
    var tdNCCdate = document.getElementById('FormsPH_tdNCCdate');
    var trNSSBC = document.getElementById('FormsPH_trNSSBC');




    if (ddlPrefEduQual == "Y") {
        trPrefEduQual.style.display = "";
        tdPrefEduQual.style.display = "";
        trNSSBC.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_reqTerritoArmy'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqNCCBCF'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqNSSCCF'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqNCCCCF'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqNSSBCF'), true);
    }
    else {
        ValidatorEnable(document.getElementById('FormsPH_reqTerritoArmy'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNCCBCF'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNSSCCF'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNCCCCF'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNSSBCF'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNCCdate'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNSSdate'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNCCCdate'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqNSSBdate'), false);

        trPrefEduQual.style.display = "none";
        tdNCCdate.style.display = "none";
        tdPrefEduQual.style.display = "none";
        trNSSBC.style.display = "none";


    }
    $("#FormsPH_ddlTerritoArmy").val('');
    $("#FormsPH_ddlNCCBCF").val('');
    $("#FormsPH_ddlNSSCCF").val('');
    $("#FormsPH_ddlNCCCCF").val('');
    $("#FormsPH_ddlNSSBCF").val('');
    $("#FormsPH_txtNCCdate").val('');
    $("#FormsPH_txtNSSdate").val('');
    $("#FormsPH_txtNCCCdate").val('');
    $("#FormsPH_txtNSSBdate").val('');

}

function ISNCCBCF() {
    var ddlNCCBCF = document.getElementById('FormsPH_ddlNCCBCF').value;
    var tdNCCdate = document.getElementById('FormsPH_tdNCCdate');
    if (ddlNCCBCF == "Y") {
        tdNCCdate.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_ReqNCCdate'), true);
    }
    else {
        tdNCCdate.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqNCCdate'), false);
    }
    $("#FormsPH_txtNCCdate").val('');
}
function ISNCCCCF() {
    var ddlNCCCCF = document.getElementById('FormsPH_ddlNCCCCF').value;
    var tdNCCCdate = document.getElementById('FormsPH_tdNCCCdate');
    if (ddlNCCCCF == "Y") {
        tdNCCCdate.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_reqNCCCdate'), true);
    }
    else {
        tdNCCCdate.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_reqNCCCdate'), false);
    }
    $("#FormsPH_txtNCCCdate").val('');
}


function ISNSSBCF() {

    var ddlNSSBCF = document.getElementById('FormsPH_ddlNSSBCF').value;
    var tdNSSBdate = document.getElementById('FormsPH_tdNSSBdate');
    if (ddlNSSBCF == "Y") {

        tdNSSBdate.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_reqNSSBdate'), true);

    }
    else {
        tdNSSBdate.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_reqNSSBdate'), false);
    }
    $("#FormsPH_txtNSSBdate").val('');
}

function ISNSSCCF() {

    var ddlNSSCCF = document.getElementById('FormsPH_ddlNSSCCF').value;
    var tdNSSdate = document.getElementById('FormsPH_tdNSSdate');
    if (ddlNSSCCF == "Y") {

        tdNSSdate.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_ReqNSSdate'), true);

    }
    else {
        tdNSSdate.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqNSSdate'), false);
    }
    $("#FormsPH_txtNSSdate").val('');
}

function IsBirthvillageclear(object) {
    $("#FormsPH_txtBirthVillage").val('');
}



function ValidateMarriagedate() {

    var t_Return = true;
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var ddlIsMarried = document.getElementById('FormsPH_ddlIsMarried').value;


    var dateString = document.getElementById('FormsPH_txtDateOfMarriage').value;
    var myDate = new Date(dateString);
    var today = new Date();
    if (myDate > today) {

        if (HdnLangid == 1) {
            alert('You cannot enter Date Of Marriage is Greater than today date');
        } else {
            alert('You cannot enter Date Of Marriage is Greater than today date');
        }
        document.getElementById('FormsPH_txtDateOfMarriage').value = "";
        return;
    }



    if (ddlIsMarried == "Y") {



        var dateString = document.getElementById('FormsPH_txtDateOfMarriage').value;
        var myDate = new Date(dateString);
        var HdnLangid = $("#FormsPH_hdnLangID").val();

        var dateString2 = document.getElementById('FormsPH_txtDobLastLivingChildren').value;
        var myDate2 = new Date(dateString2);


        if (myDate > myDate2) {
            if (HdnLangid == 1) {
                alert("Last Living Child date Should not be Greater than Marriage date")
            } else {
                alert("Last Living Child date Should not be Greater than Marriage date")
            }
            document.getElementById('FormsPH_txtDateOfMarriage').value = "";
            return;
        }
    }

}




function ValidateLastChilddate() {

    var t_Return = true;

    var dateString = document.getElementById('FormsPH_txtDobLastLivingChildren').value;
    var myDate = new Date(dateString);
    var today = new Date();
    var HdnLangid = $("#FormsPH_hdnLangID").val();

    if (myDate > today) {
        if (HdnLangid == 1) {
            alert('You cannot enter a date in the future!.');
        } else {
            alert('You cannot enter a date in the future!.');
        }
        document.getElementById('FormsPH_txtDobLastLivingChildren').value = "";
        return;
    }

    var NoOfChildredn = document.getElementById('FormsPH_txtNoofChildren').value;
    if (NoOfChildredn >= 1) {


        var dateString = document.getElementById('FormsPH_txtDateOfMarriage').value;
        var myDate = new Date(dateString);


        var dateString2 = document.getElementById('FormsPH_txtDobLastLivingChildren').value;
        var myDate2 = new Date(dateString2);
        var HdnLangid = $("#FormsPH_hdnLangID").val();

        if (myDate2 < myDate) {
            if (HdnLangid == 1) {
                alert("Last Living Child date Should be Greater than Marriage date")
            } else {
                alert("Last Living Child date Should be Greater than Marriage date")
            }
            document.getElementById('FormsPH_txtDobLastLivingChildren').value = "";
            return;
        }



        //val1 = document.getElementById('FormsPH_txtDateOfMarriage').value;
        //var Madate = val1.split('/');
        //var Marriagedate = new Date(Madate[2], Madate[1] * 1 - 1, Madate[0]);

        //val2 = document.getElementById('FormsPH_txtDobLastLivingChildren').value;
        //var Childdate = val2.split('/');
        //var LastChilddate = new Date(Childdate[2], Childdate[1] * 1 - 1, Childdate[0]);

        //if ((Marriagedate - LastChilddate) < 0) {
        //    t_Return = false;
        //    alert("Last Living Child date Should not be Greater than Marriage date")
        //    document.getElementById('FormsPH_txtDobLastLivingChildren').value = "";
        //    return;
        //}
    }
    else {
        alert("Please Enter No of living Child.")
        document.getElementById('FormsPH_txtDobLastLivingChildren').value = "";
        return;
    }


}

function aspxPageload() {

    IsMarriedNew('FormsPH_ddlIsMarried');
    IsCategory("#FormsPH_ddlCaste")

}

function IsMarriedNew(obj) {


    var ddlIsMarried;
    ddlIsMarried = document.getElementById('FormsPH_ddlIsMarried').value;
    ValidatorEnable(document.getElementById('FormsPH_rfvDateOfMarriage'), false);
    ValidatorEnable(document.getElementById('FormsPH_rfvTwinsChildren'), false);
    //ValidatorEnable(document.getElementById('FormsPH_rfvDobLastLivingChildren'), false);
    ValidatorEnable(document.getElementById('FormsPH_rfvddlPermanentDistrictCodeOfHusband'), false);

    if (ddlIsMarried == "Y") {
        trDetailofMarriage.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_rfvDateOfMarriage'), true);
        var NoOfChildredn = document.getElementById('FormsPH_txtNoofChildren').value;
        if (NoOfChildredn >= 1) {


            ValidatorEnable(document.getElementById('FormsPH_rfvTwinsChildren'), false);
            //ValidatorEnable(document.getElementById('FormsPH_rfvDobLastLivingChildren'), true);
        }


    }
    else {
        trDetailofMarriage.style.display = "none";
        //document.getElementById('FormsPH_txtNoofChildren').value = 0;
        //document.getElementById('FormsPH_txtDateOfMarriage').value = "";
        //document.getElementById('FormsPH_ddlTwinsChildren').value = "";
        //document.getElementById('FormsPH_txtDobLastLivingChildren').value = "";

    }

    $("#FormsPH_txtDateOfMarriage").val('');
    $("#FormsPH_txtNoofChildren").val('');
    $("#FormsPH_txtDobLastLivingChildren").val('');


}
function IsMarriedStatus(obj) {
    var val = obj.value;
    var TdNameAfterMarriage = document.getElementById('FormsPH_TdNameAfterMarriage');

    if (val == "Y") {
        TdNameAfterMarriage.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_ReqNameAfterMarriage'), true);

    }
    else {
        $("#FormsPH_txtNameAfterMarriage").val('');
        TdNameAfterMarriage.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqNameAfterMarriage'), false);
    }

}
function IsMarried(obj) {

    $("#FormsPH_txtNameAfterMarriage").val('');
    //var ddlIsMarried;
    var ddlGender;
    var NameAfterMarriage;
    var txtNameAfterMarriage;
    var trNameAfterMarriage;


    if (obj.id.indexOf('FormsPH_ddlGender') > -1) {
        ddlGender = obj.value;
        ddlIsMarried = document.getElementById(obj.id.replace('FormsPH_ddlGender', 'FormsPH_ddlIsMarried')).value;
        NameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlGender', 'FormsPH_NameAfterMarriage'));
        txtNameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlGender', 'FormsPH_txtNameAfterMarriage'));
        trNameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlGender', 'FormsPH_trNameAfterMarriage'));
    }
    else if (obj.id.indexOf('FormsPH_ddlIsMarried') > -1) {
        ddlIsMarried = obj.value;
        ddlGender = document.getElementById(obj.id.replace('FormsPH_ddlIsMarried', 'FormsPH_ddlGender')).value;
        NameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlIsMarried', 'FormsPH_NameAfterMarriage'));
        txtNameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlIsMarried', 'FormsPH_txtNameAfterMarriage'));
        trNameAfterMarriage = document.getElementById(obj.id.replace('FormsPH_ddlIsMarried', 'FormsPH_trNameAfterMarriage'));


    }


    if (ddlIsMarried == "Y") {
        if (ddlGender == "F") {
            trNameAfterMarriage.style.display = "";

            ValidatorEnable(document.getElementById('FormsPH_rfvddlPermanentDistrictCodeOfHusband'), false);
            document.getElementById('FormsPH_ddlPermanentDistrictCodedivision').disabled = true;
        }
        else {
            trNameAfterMarriage.style.display = "none";
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPermanentDistrictCodeOfHusband'), false);
        }
    }
    else {
        trNameAfterMarriage.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_rfvddlPermanentDistrictCodeOfHusband'), false);
    }

}

//function IsMalefemale(obj) {
//    var val = obj.value;
//    if (val != "" && val == "F") {
//                $("#FormsPH_LblChestDeflated").hide();
//                $("#FormsPH_TxtChestDeflated").hide();
//                $("#FormsPH_LblChestInflated").hide();
//                $("#FormsPH_TxtChestInflated").hide();
//               $("#str1").hide();
//                $("#str2").hide();
//        ValidatorEnable(document.getElementById('FormsPH_ReqChestDeflated'), false);
//        ValidatorEnable(document.getElementById('FormsPH_ReqChestInflated'), false);

//        $("#FormsPH_tblChestDetails2").hide();

//    }
//    else {
//                $("#FormsPH_LblChestDeflated").show();
//                $("#FormsPH_TxtChestDeflated").show();
//                $("#FormsPH_LblChestInflated").show();
//                $("#FormsPH_TxtChestInflated").show();
//                $("#str1").show();
//                $("#str2").show();
//                ValidatorEnable(document.getElementById('FormsPH_ReqChestDeflated'), true);
//               ValidatorEnable(document.getElementById('FormsPH_ReqChestInflated'), true);
//        document.getElementById('FormsPH_ReqChestDeflated').enabled = false;
//        document.getElementById('FormsPH_ReqChestInflated').enabled = false;


//        $("#FormsPH_TxtChestDeflated").val('');
//        $("#FormsPH_TxtChestInflated").val('');
//        $("#FormsPH_tblChestDetails2").show();
//    }

//    var ddlCasteId = document.getElementById('FormsPH_ddlCaste');
//    SetCategory(ddlCasteId.options[ddlCasteId.selectedIndex].text);
//}

function IsMalefemale(obj) {
    var val = obj.value;
    if ((val != "" && val == "F") || (val != "" && val == "T")) {

        $("#FormsPH_TxtChestDeflated").val('');
        $("#FormsPH_TxtChestInflated").val('');
        $("#FormsPH_tblChestDetails2").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqChestDeflated'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqChestInflated'), false);

    }
    else {
        $("#FormsPH_TxtChestDeflated").val('');
        $("#FormsPH_TxtChestInflated").val('');
        $("#FormsPH_tblChestDetails2").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqChestDeflated'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqChestInflated'), true);
    }

    var ddlCasteId = document.getElementById('FormsPH_ddlCaste');
}

function IsCategory(obj) {

    var CategoryText = obj.options[obj.selectedIndex].text;
    SetCategory(CategoryText);
}

function SetCategory(Category) {


    var ddlGenderObj = $('#FormsPH_ddlGender');
    var ObjtrCasteDetails = document.getElementById('FormsPH_trCasteDetails');
    var ObjCastCertificateValidUptodate = document.getElementById('FormsPH_tdCastCertificateValidUptodate');

    if (Category == "SC" || Category == "ST" || Category == "Category I" || (Category == "General/Merit" && ddlGenderObj.val() == "M")) {

        ObjCastCertificateValidUptodate.style.display = "none";
        document.getElementById('FormsPH_reqCastCertificateValidUptodate').enabled = false;

    }
    else {
        if (Category == "Category 2A" || Category == "Category 2B" || Category == "Category 3A" || Category == "Category 3B") {
            ObjCastCertificateValidUptodate.style.display = "";
            document.getElementById('FormsPH_reqCastCertificateValidUptodate').enabled = true;
        }
        else {

            ObjCastCertificateValidUptodate.style.display = "none";
            document.getElementById('FormsPH_reqCastCertificateValidUptodate').enabled = false;
        }

    }

    if (Category == "General/Merit") {
        document.getElementById('FormsPH_ReqCasteNo').enabled = false;
        document.getElementById('FormsPH_ReqCasteNoPlace').enabled = false;
        document.getElementById('FormsPH_ReqCastCertificateIssuingDate').enabled = false;
        document.getElementById('FormsPH_reqCastCertificateValidUptodate').enabled = false;
        ObjtrCasteDetails.style.display = "none";

    }
    else {
        document.getElementById('FormsPH_ReqCasteNo').enabled = true;
        document.getElementById('FormsPH_ReqCasteNoPlace').enabled = true;
        document.getElementById('FormsPH_ReqCastCertificateIssuingDate').enabled = true;
        ObjtrCasteDetails.style.display = "";

    }
    $("#FormsPH_txtSubCaste").val('');
    $("#FormsPH_txtCasteNo").val('');
    $("#FormsPH_ddlCasteNoPlace").val('');
    $("#FormsPH_txtCastCertificateIssuingDate").val('');
    $("#FormsPH_txtCastCertificateValidUptodate").val('');
}

function IsBPL(FormsPH_ddlBpl) {

    var tdlblBPLNo = document.getElementById('FormsPH_tdlblBPLNo');
    var TrBPLupload = document.getElementById('FormsPH_TrBPLupload');
    var ddlBpl = $('#FormsPH_ddlBpl');

    if (ddlBpl.val() == "Y") {

        tdlblBPLNo.style.display = "none";
        TrBPLupload.style.display = "none";
        document.getElementById('FormsPH_ReqtxtBPLCertificateNo').enabled = false;
        document.getElementById('FormsPH_ReqBPLIssuingAuthority').enabled = false;
        document.getElementById('FormsPH_ReqtxtCertificateBPLIssuingDate').enabled = false;
        document.getElementById('FormsPH_ReqtxttxtCertificateBPLUptpdate').enabled = false;
    }
    else {

        tdlblBPLNo.style.display = "none";
        TrBPLupload.style.display = "none";
        document.getElementById('FormsPH_ReqtxtBPLCertificateNo').enabled = false;
        document.getElementById('FormsPH_ReqBPLIssuingAuthority').enabled = false;
        document.getElementById('FormsPH_ReqtxtCertificateBPLIssuingDate').enabled = false;
        document.getElementById('FormsPH_ReqtxttxtCertificateBPLUptpdate').enabled = false;
    }

    $("#FormsPH_txtBPLCertificateNo").val('');
    $("#FormsPH_ddlBPLCertificateIssuingAuthority").val('');
    $("#FormsPH_txtCertificateBPLIssuingDate").val('');
    $("#FormsPH_txttxtCertificateBPLUptpdate").val('');
}

function IsCasteValidity(obj) {
    var CategoryText = obj.options[obj.selectedIndex].text;
    SetCasteValidity(CategoryText);
}

function SetCasteValidity(Category) {

    var ReqCasteValidityNo = document.getElementById('FormsPH_ReqCasteValidityNo');

    var lblCasteValidityNo = document.getElementById('FormsPH_lblCasteValidityNo');
    var lblCasteValidityNoStar = document.getElementById('FormsPH_lblCasteValidityNoStar');
    var txtCasteValidityNo = document.getElementById('FormsPH_txtCasteValidityNo');

    if (Category == "Yes") {
        ReqCasteValidityNo.enabled = true;

        lblCasteValidityNo.style.display = "";
        lblCasteValidityNoStar.style.display = "";
        txtCasteValidityNo.style.display = "";
        // document.getElementById('FormsPH_TrCasteValidityDate').style.display = "";
    }
    else {
        ReqCasteValidityNo.enabled = false;
        lblCasteValidityNo.style.display = "none";
        lblCasteValidityNoStar.style.display = "none";
        txtCasteValidityNo.style.display = "none";
        //  document.getElementById('FormsPH_TrCasteValidityDate').style.display = "none";
    }
    $("#FormsPH_txtCasteValidityNo").val('');
    $("#FormsPH_TxtCasteValidityDate").val('');

    //addded by amol
    ReqCasteValidityNo.enabled = false;


}

function IsNonCreamyLayerCerti(obj) {
    var CategoryText = obj.options[obj.selectedIndex].text;
    SetNonCreamyLayerCerti(CategoryText);
}

function SetNonCreamyLayerCerti(Category) {
    var ReqNonCreamyLayerCertiNo = document.getElementById('FormsPH_ReqNonCreamyLayerCertiNo');
    //var ReqNonCreamyLayerCertiDate = document.getElementById('FormsPH_ReqNonCreamyLayerCertiDate');
    var trNonCreamyLayerCertiNo = document.getElementById('FormsPH_trNonCreamyLayerCertiNo');
    var txtNonCreamyLayerCertiNo = document.getElementById('FormsPH_txtNonCreamyLayerCertiNo');
    var txtNonCreamyLayerCertiDate = document.getElementById('FormsPH_txtNonCreamyLayerCertiDate');
    var trNonCreamyLayerAuthority = document.getElementById('FormsPH_trNonCreamyLayerAuthority');



    if (Category == "Yes") {

        ReqNonCreamyLayerCertiNo.enabled = true;
        // ReqNonCreamyLayerCertiDate.enabled = true;
        trNonCreamyLayerCertiNo.style.display = "";
        trNonCreamyLayerAuthority.style.display = "";

        document.getElementById('FormsPH_ReqddlNoncreamyauthority').enabled = true;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiDate').enabled = true;
        document.getElementById('FormsPH_Reqtxtnoncremuptodate').enabled = true;
    }
    else {
        ReqNonCreamyLayerCertiNo.enabled = false;
        // ReqNonCreamyLayerCertiDate.enabled = false;
        trNonCreamyLayerCertiNo.style.display = "none";
        trNonCreamyLayerAuthority.style.display = "none";

        document.getElementById('FormsPH_ReqddlNoncreamyauthority').enabled = false;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiDate').enabled = false;
        document.getElementById('FormsPH_Reqtxtnoncremuptodate').enabled = false;
    }

    //$("#FormsPH_txtNonCreamyLayerCertiNo").val('');
    //$("#FormsPH_txtNonCreamyLayerCertiDate").val('');

    $("#FormsPH_ddlIsNonCreamyLayer").val('');
    $("#FormsPH_ddlIsNonCreamyLayerCerti").val('');
    $("#FormsPH_txtNonCreamyLayerCertiNo").val('');
    $("#FormsPH_ddlNoncreamyauthority").val('');
    $("#FormsPH_FileUploadNoncremyCertificate").val('');
    $("#FormsPH_txtNonCreamyLayerCertiDate").val('');
    $("#FormsPH_txtnoncremuptodate").val('');


}

function IsMotherTongueOther(obj) {
    var CategoryText = obj.options[obj.selectedIndex].text;
    SetMotherTongueOther(CategoryText);
}

function SetMotherTongueOther(Category) {

    var ReqMotherTounge = document.getElementById('FormsPH_ReqMotherTounge')

    var lblMotherTongueOther = document.getElementById('FormsPH_lblMotherTongueOther');
    var lblMotherTongueOtherStar = document.getElementById('FormsPH_lblMotherTongueOtherStar');
    var txtMotherTounge = document.getElementById('FormsPH_txtMotherTounge');

    if (Category.toUpperCase() == "OTHER") {
        ReqMotherTounge.enabled = true;
        lblMotherTongueOther.style.display = "";
        lblMotherTongueOtherStar.style.display = "";
        txtMotherTounge.style.display = "";
    }
    else {
        ReqMotherTounge.enabled = false;
        lblMotherTongueOther.style.display = "none";
        lblMotherTongueOtherStar.style.display = "none";
        txtMotherTounge.style.display = "none";
    }
    $("#FormsPH_txtMotherTounge").val('');
}


function IsDisabled(obj) {

    var val = obj.value;
    var trPhcertificate = document.getElementById('FormsPH_trPhcertificate');
    var TdLocomotor = document.getElementById('FormsPH_TdLocomotor');
    if (val === "Y") {
        trPhcertificate.style.display = "";
        TdLocomotor.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqDisabilityType'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhPercent'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhcertificateno'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqIssuedate'), true);
    }
    else {
        trPhcertificate.style.display = "none";
        TdLocomotor.style.display = "none";
        $("#FormsPH_ddlDisabilityType").val("");
        $("#FormsPH_txtPhpercentage").val('');
        $("#FormsPH_txtPhcertificatenumber").val('');
        $("#FormsPH_txtIssueDate").val('');
        $("#FormsPH_ddlLocomotorType").val('');

        ValidatorEnable(document.getElementById('FormsPH_ReqDisabilityType'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhPercent'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhcertificateno'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIssuedate'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqLocomotorType'), false);
    }
}


function FunChangeDisabilityType(obj) {
    var val = obj.value;

    var ddlDisabilityType = document.getElementById('FormsPH_ddlDisabilityType');
    var ddlWriterRequired = document.getElementById('FormsPH_ddlWriterRequired');
    var ddlIsWriterArrangedOnOwn = document.getElementById('FormsPH_ddlIsWriterArrangedOnOwn');

    var lblDisability = document.getElementById('FormsPH_lblDisability');
    var trScribe = document.getElementById('FormsPH_trScribe');
    var LBLOD2 = document.getElementById('FormsPH_LBLOD2');
    var lblDisabilityStar = document.getElementById('FormsPH_lblDisabilityStar');

    var TPhCompTime = document.getElementById('FormsPH_TrPhCompTime');

    if (val == "3") {
        trScribe.style.display = "none";
        lblDisabilityStar.style.display = "none";
        TrPhCompTime.style.display = "none";
        $("#FormsPH_ddlWriterRequired").val("");
        $("#FormsPH_ddlIsWriterArrangedOnOwn").val("");
        $("#FormsPH_DdlPhCompTime").val("");
        ValidatorEnable(document.getElementById('FormsPH_ReqScribeArrangement'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqWriterRequired'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhCompTime'), false);
    }
    else {
        trScribe.style.display = "";
        lblDisabilityStar.style.display = "";
        TrPhCompTime.style.display = "none";

        ValidatorEnable(document.getElementById('FormsPH_ReqWriterRequired'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPhCompTime'), false);

    }
}
function IsDisabilityType(obj) {

    var val = obj.value;
    var trScribe = document.getElementById('FormsPH_trScribe');
    var TdLocomotor = document.getElementById('FormsPH_TdLocomotor');
    if (val == "1" || val == "2") {
        trScribe.style.display = "";
        TdLocomotor.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqWriterRequired'), true);
        $("#FormsPH_ddlLocomotorType").val("");
        ValidatorEnable(document.getElementById('FormsPH_ReqLocomotorType'), false);
    }
    else if (val == "7") {
        TdLocomotor.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_ReqLocomotorType'), true);
        trScribe.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqWriterRequired'), false);
        $("#FormsPH_ddlWriterRequired").val("");

    }
    else {
        TdLocomotor.style.display = "none";
        trScribe.style.display = "none";
        $("#FormsPH_ddlWriterRequired").val("");
        $("#FormsPH_ddlLocomotorType").val("");
        ValidatorEnable(document.getElementById('FormsPH_ReqWriterRequired'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqLocomotorType'), false);
    }

}
function IsIdentity(obj) {
    $("#TxtIdentityNo").val('');
}

function FunScribeChange(obj) {
    var val = obj.value;

    var TDLblScribe = document.getElementById('FormsPH_TDLblScribe');
    //var TDVScribe = document.getElementById('FormsPH_TDVScribe');

    if (val == "Y") {
        TDLblScribe.style.display = "";
        // TDVScribe.style.display = "";
        ValidatorEnable(document.getElementById('FormsPH_ReqScribeArrangement'), true);
    }
    else {
        TDLblScribe.style.display = "none";
        //TDVScribe.style.display = "none";
        $("#FormsPH_ddlIsWriterArrangedOnOwn").val("");
        ValidatorEnable(document.getElementById('FormsPH_ReqScribeArrangement'), false);
    }

}

function IsDomiciled(obj) {
    var val = obj.value;
    if (val != "" && val == "Y") {
        $("#FormsPH_ddlCaste").removeAttr('disabled');
    }
    else {
        $("#FormsPH_ddlCaste").val('ce18b86d-d7ee-42f7-9d89-862fdca8717d');
        $("#FormsPH_ddlCaste").attr('disabled', 'disabled');
        SetCategory('General/Merit');
    }
}

function IsNonCreamyLayer(obj) {
    var CategoryText = obj.options[obj.selectedIndex].text;
    SetNonCreamyLayer(CategoryText);
}

function SetNonCreamyLayer(Category) {

    var trIsNonCreamyLayerCerti = document.getElementById('FormsPH_trIsNonCreamyLayerCerti');
    var trNonCreamyLayerCertiNo = document.getElementById('FormsPH_trNonCreamyLayerCertiNo');
    var trNonCreamyLayerAuthority = document.getElementById('FormsPH_trNonCreamyLayerAuthority');

    if (Category == "Yes") {
        trIsNonCreamyLayerCerti.style.display = "";
        trNonCreamyLayerCertiNo.style.display = "";
        trNonCreamyLayerAuthority.style.display = "";
        document.getElementById('FormsPH_ReqIsNonCreamyLayerCerti').enabled = true;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiNo').enabled = true;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiDate').enabled = true;
        document.getElementById('FormsPH_ReqddlNoncreamyauthority').enabled = true;
        document.getElementById('FormsPH_Reqtxtnoncremuptodate').enabled = true;


    }
    else {
        trIsNonCreamyLayerCerti.style.display = "none";
        trNonCreamyLayerCertiNo.style.display = "none";
        trNonCreamyLayerAuthority.style.display = "none";
        document.getElementById('FormsPH_ReqIsNonCreamyLayerCerti').enabled = false;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiNo').enabled = false;
        document.getElementById('FormsPH_ReqNonCreamyLayerCertiDate').enabled = false;
        document.getElementById('FormsPH_ReqddlNoncreamyauthority').enabled = false;
        document.getElementById('FormsPH_Reqtxtnoncremuptodate').enabled = false;
    }
    $("#FormsPH_ddlIsNonCreamyLayerCerti").val('');
    $("#FormsPH_txtNonCreamyLayerCertiNo").val('');
    $("#FormsPH_txtNonCreamyLayerCertiDate").val('');
    $("#FormsPH_ddlNoncreamyauthority").val('');
    $("#FormsPH_txtnoncremuptodate").val('');

}

function IsPermanentSameasPresent(object) {

    if (object.checked) {
        $("#PermanentAddr").hide();
        //        $("#RegistrationForm__PermanentAddress").val($("#RegistrationForm__PresentAddress").val());
        //        $("#RegistrationForm__PermanentStreet").val($("#RegistrationForm__PresentStreet").val());
        //        $("#RegistrationForm__PermanentBuilding").val($("#RegistrationForm__PresentBuilding").val());
        //        $("#RegistrationForm__PermanentLocality").val($("#RegistrationForm__PresentLocality").val());
        //        $("#RegistrationForm__PermanentLandmark").val($("#RegistrationForm__PresentLandmark").val());
        //        $("#RegistrationForm__PermanentStatecode").val($("#RegistrationForm__PresentStatecode")[0].value).change();
        //        $("#RegistrationForm__PermanentDistrictcode").val($("#RegistrationForm__PresentDistrictcode").find(":selected").text());
        //        $("#RegistrationForm__PermanentSubdistrictcode").val($("#RegistrationForm__PresentSubdistrictcode").find(":selected").text());
        //        var village = $("#RegistrationForm__PresentVillageCode").find(":selected").text();
        //        if (village == "Select")
        //            village = "";
        //        $("#RegistrationForm__PermanentVillageCode").val(village);
        //        $("#RegistrationForm__PermanentPinCode").val($("#RegistrationForm__PresentPinCode").val());

        $("#RegistrationForm__PermanentAddress").removeAttr("MOLM");
        $("#RegistrationForm__PermanentStreet").removeAttr("MOLM");
        $("#RegistrationForm__PermanentStatecode").removeAttr("MOLM");
        $("#RegistrationForm__PermanentDistrictcode").removeAttr("MOLM");
        $("#RegistrationForm__PermanentSubdistrictcode").removeAttr("MOLM");
        $("#RegistrationForm__PermanentPinCode").removeAttr("MOLM");

    }
    else {
        $("#PermanentAddr").show();
        //        $("#RegistrationForm__PermanentAddress").val("");
        //        $("#RegistrationForm__PermanentStreet").val("");
        //        $("#RegistrationForm__PermanentBuilding").val("");
        //        $("#RegistrationForm__PermanentLocality").val("");
        //        $("#RegistrationForm__PermanentLandmark").val("");
        //        $("#RegistrationForm__PermanentDistrictcode").val("");
        //        $("#RegistrationForm__PermanentSubdistrictcode").val("");
        //        $("#RegistrationForm__PermanentVillageCode").val("");
        //        $("#RegistrationForm__PermanentPinCode").val("");
        //        $("#RegistrationForm__PermanentStateCode").val("");
        $("#RegistrationForm__PermanentAddress").attr("MOLM", "C");
        $("#RegistrationForm__PermanentStreet").attr("MOLM", "C");
        $("#RegistrationForm__PermanentStatecode").attr("MOLM", "C");
        $("#RegistrationForm__PermanentDistrictcode").attr("MOLM", "C");
        $("#RegistrationForm__PermanentSubdistrictcode").attr("MOLM", "C");
        $("#RegistrationForm__PermanentPinCode").attr("MOLM", "C");
    }
}


function BlackListed(obj) {
    var val = obj.value;
    var tbBlackList = document.getElementById(obj.id.replace('FormsPH_ddlIsBlackListed', 'FormsPH_tbBlackList'));
    //    var txtToBlackListDT = document.getElementById(obj.id.replace('ddlIsBlackListed', 'ddlDisabilityType'));


    //    var LBL7 = document.getElementById(obj.id.replace('ddlIsBlackListed', 'LBLO5'));
    //    var LBL6 = document.getElementById(obj.id.replace('ddlIsBlackListed', 'LBLOD1'));



    if (val == "Y") {
        //        ValidatorEnable(document.getElementById('FormsPH_ReqFromBlackListDT'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqToBlackListDT'), true);
        document.getElementById('FormsPH_ReqFromBlackListDT').enabled = true;
        document.getElementById('FormsPH_ReqToBlackListDT').enabled = true;
        tbBlackList.style.display = "";

        //        $("#ddlFromBlackListDT").show();
        //        $("#ddlToBlackListDT").show();

        //        $("#RegistrationForm__LBL6").show();
        //        $("#RegistrationForm__LBL7").show();

    }
    else {
        ValidatorEnable(document.getElementById('FormsPH_ReqFromBlackListDT'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqToBlackListDT'), false);
        tbBlackList.style.display = "none";
        $("#FormsPH_txtFromBlackListDT").val("");
        $("#FormsPH_txtToBlackListDT").val("");

        //        $("#RegistrationForm__FromBlackListDT").hide();
        //        $("#RegistrationForm__ToBlackListDT").hide();
        //        //$("#RegistrationForm__FromBlackListDT").val("");
        //        //$("#RegistrationForm__ToBlackListDT").val("");
        //        $("#RegistrationForm__LBL6").hide();
        //        $("#RegistrationForm__LBL7").hide();
    }
}

function IsPhysicallyChallenged(object) {

    $("#FormsPH_ddlDisabilityType").attr("readonly", !object.checked);
    $("#FormsPH_ddlWriterRequired").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsWriterArrangedOnOwn").attr("readonly", !object.checked);


}

function IsIndian(object) {
    if (object.checked) {
        $("#RegistrationForm__MigratedFrom").attr("disabled", true);
    } else {
        $("#RegistrationForm__MigratedFrom").removeAttr("disabled");
    }

}


function IsPhysicallyChallenged(object) {

    $("#FormsPH_ddlIsInternational").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsIOC").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsSchoolSAI").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsWomenSAI").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsSchoolGFI").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsInternationalIOC").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsInternationalIFAIOC").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsNationalNFAIOC").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsStateMOA").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsStateSOAMOA").attr("readonly", !object.checked);
    $("#FormsPH_ddlIsOther").attr("readonly", !object.checked);
    if (object.checked) {
        $("#FormsPH_ddlDisabilityType").removeAttr("disabled");

    } else {
        $("#FormsPH_ddlDisabilityType").attr("disabled", true);
    }


}

function IsWasCourtCaseFiled(object) {
    debugger;
    var val = $("#FormsPH_ddlWasCourtCaseFiled").val();
    var ddlWasCourtCaseCompleted = $("#FormsPH_ddlWasCourtCaseCompleted").val();
    var TrWasCourtCaseCompleted = document.getElementById('FormsPH_TrWasCourtCaseCompleted');
    var trWasCourtCaseCompletedDetails = document.getElementById('FormsPH_trWasCourtCaseCompletedDetails');

    if (val != "" && val == "Y") {

        //if (ddlWasCourtCaseCompleted == "Y") {
        //    trWasCourtCaseCompletedDetails.style.display = "";
        //}
        //else {
        //    trWasCourtCaseCompletedDetails.style.display = "none";

        //    $("#FormsPH_txtWasCourtCaseCompletedDetails").val('');
        //}
        trWasCourtCaseCompletedDetails.style.display = "";
        TrWasCourtCaseCompleted.style.display = "";
        document.getElementById('FormsPH_ReqWasCourtCaseCompleted').enabled = true;
        document.getElementById('FormsPH_ReqtxtCourtCaseNo').enabled = true;
        document.getElementById('FormsPH_ReqWasCourtCaseCompletedDetails').enabled = true;
    }
    else {
        TrWasCourtCaseCompleted.style.display = "none";
        trWasCourtCaseCompletedDetails.style.display = "none";
        document.getElementById('FormsPH_ReqWasCourtCaseCompleted').enabled = false;
        document.getElementById('FormsPH_ReqtxtCourtCaseNo').enabled = false;
        document.getElementById('FormsPH_ReqWasCourtCaseCompletedDetails').enabled = false;
        $("#FormsPH_ddlWasCourtCaseCompleted").val('');
        $("#FormsPH_txtCourtCaseNo").val('');
        $("#FormsPH_txtWasCourtCaseCompletedDetails").val('');

    }
}

//function IsExservice(object) {

//    var val = $("#FormsPH_ddlIsExService").val();
//    var txtExServiceYears = $("#FormsPH_txtExServiceYears").val();
//    var trExServicemenNormalTenure = document.getElementById('FormsPH_trExServicemenNormalTenure');
//    var trexservicedischarged = document.getElementById('FormsPH_trexservicedischarged');
//    var trsolderWelfareEmpExch = document.getElementById('FormsPH_trsolderWelfareEmpExch');
//    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
//    var TrExserivceMedicalGround = document.getElementById('FormsPH_TrExserivceMedicalGround');
//    if (val != "" && val == "Y")
//    {

//        trexservicedischarged.style.display = "";  
//        document.getElementById('FormsPH_ReqddlIsExserviceDischarge').enabled = true;        
//    }
//    else
//    {     
//        trexservicedischarged.style.display = "none";
//        // tblExServiceTime.style.display = "none";              
//        trExServicemenNormalTenure.style.display = "none";   
//        trsolderWelfareEmpExch.style.display = "none";       
//        TrExserivceMedicalGround.style.display = "none";
//        trExServicemenNormalTenure.style.display = "none";
//        trSolderWelfareEmpExchRegi.style.display = "none";

//        $("#FormsPH_tblExServiceTime").hide();
//        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
//        document.getElementById('FormsPH_reqExserivceMedicalGround').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExch').enabled = false;
//        document.getElementById('FormsPH_ReqddlIsExserviceDischarge').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceYears').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceMonths').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceDays').enabled = false;
//        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo').enabled = false;
//        document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate').enabled = false;
//        //ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiUptodate'), false);

//        $("#FormsPH_ddlIsExserviceDischarge").val('');
//        //$("#FormsPH_txtExServiceYears").val('');
//        //$("#FormsPH_txtExServiceMonths").val('');
//        //$("#FormsPH_txtExServiceDays").val('');
//        $("#FormsPH_ddlExServicemenNormalTenure").val('');
//        $("#FormsPH_ddlIsExserviceDischarge").val('');
//        $("#FormsPH_ddlSolderWelfareEmpExch").val('');
//        $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
//        $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');
//        $("#FormsPH_ddlExserivceMedicalGround").val('');

//    }
//}

//function IsExserviceDischareg(object) {
//    
//    var val = $("#FormsPH_ddlIsExserviceDischarge").val();
//    //var txtExServiceYears = $("#FormsPH_txtExServiceYears").val();
//    var trExServicemenNormalTenure = document.getElementById('FormsPH_trExServicemenNormalTenure');
//    var trexservicedischarged = document.getElementById('FormsPH_trexservicedischarged');
//    var trsolderWelfareEmpExch = document.getElementById('FormsPH_trsolderWelfareEmpExch');
//    var trSolderWelfareEmpExchRegi = document.getElementById('FormsPH_trSolderWelfareEmpExchRegi');
//    var TrExserivceMedicalGround = document.getElementById('FormsPH_TrExserivceMedicalGround');

//    if (val != "" && val == "N") {
//        //$("#FormsPH_tblExServiceTime").hide();
//        trExServicemenNormalTenure.style.display = "";

//        //document.getElementById('FormsPH_ReqExServiceYears').enabled = true;
//        //document.getElementById('FormsPH_ReqExServiceMonths').enabled = true;
//        //document.getElementById('FormsPH_ReqExServiceDays').enabled = true;
//        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = true;
//        ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExch'), false);


//    }

//    else {
//        $("#FormsPH_tblExServiceTime").hide();


//        // tblExServiceTime.style.display = "none";              
//        trExServicemenNormalTenure.style.display = "none";
//        trsolderWelfareEmpExch.style.display = "none";
//        TrExserivceMedicalGround.style.display = "none";
//        trExServicemenNormalTenure.style.display = "none";
//        trSolderWelfareEmpExchRegi.style.display = "none";

//        $("#FormsPH_tblExServiceTime").hide();
//        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
//        document.getElementById('FormsPH_reqExserivceMedicalGround').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExch').enabled = false;
//        document.getElementById('FormsPH_ReqddlIsExserviceDischarge').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceYears').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceMonths').enabled = false;
//        //document.getElementById('FormsPH_ReqExServiceDays').enabled = false;
//        document.getElementById('FormsPH_ReqExServicemenNormalTenure').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiNo').enabled = false;
//        document.getElementById('FormsPH_ReqSolderWelfareEmpExchRegiName').enabled = false;
//        document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiDate').enabled = false;
//        //ValidatorEnable(document.getElementById('FormsPH_reqSolderWelfareEmpExchRegiUptodate'), false);

//        //$("#FormsPH_txtExServiceYears").val('');
//        //$("#FormsPH_txtExServiceMonths").val('');
//        //$("#FormsPH_txtExServiceDays").val('');
//        $("#FormsPH_ddlExServicemenNormalTenure").val('');
//        //$("#FormsPH_ddlIsExserviceDischarge").val('');
//        $("#FormsPH_ddlSolderWelfareEmpExch").val('');
//        $("#FormsPH_ddlSolderWelfareEmpExchRegiName").val('');
//        $("#FormsPH_txtSolderWelfareEmpExchRegiDate").val('');
//        $("#FormsPH_ddlExserivceMedicalGround").val('');


//    }
//}

function IsFulltimeCadet(object) {
    var val = $("#FormsPH_ddlIsFulltimeCadet").val();
    var txtExServiceYears = $("#FormsPH_txtIsFulltimeCadetYears").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_tblIsFulltimeCadet").show();
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceYears'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceMonths'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceDays'), true);
        document.getElementById('FormsPH_ReqIsFulltimeCadetYears').enabled = true;
        document.getElementById('FormsPH_ReqIsFulltimeCadetMonths').enabled = true;
        document.getElementById('FormsPH_ReqIsFulltimeCadetDays').enabled = true;
        //ValidatorValidate(FormsPH_ReqExServiceYears); 
    }

    else {
        $("#FormsPH_tblIsFulltimeCadet").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqIsFulltimeCadetYears'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIsFulltimeCadetMonths'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIsFulltimeCadetDays'), false);
        $("#FormsPH_txtIsFulltimeCadetYears").val('');
        $("#FormsPH_txtIsFulltimeCadetMonths").val('');
        $("#FormsPH_txtIsFulltimeCadetDays").val('');
    }
}

function IsEmployee(object) {

    var val = $("#FormsPH_DdlIsEmployee").val();
    var trGovEmployee = document.getElementById('FormsPH_trGovEmployee');
    var trEmployed = document.getElementById('FormsPH_trEmployed');
    // var trExServiceman = document.getElementById('FormsPH_trExServiceman');

    if (val != "" && val == "Y") {

        //    trExServiceman.style.display = "";

        //ValidatorEnable(document.getElementById('FormsPH_ReqIsGOMEmployee0'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqNatureofEmployment'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqEmployed'), true);
        //ValidatorEnable(document.getElementById('FormsPH_ReqIsExService0'), true);
        //trGovEmployee.style.display = "";

        trEmployed.style.display = "";
        //$("#FormsPH_ddlIsGOMEmployee").val('');
        $("#FormsPH_ddlNatureofEmployment").val('');
        $("#FormsPH_ddlEmployed").val('');
        //  $("#FormsPH_ddlIsExService").val('');

    }
    else {

        //document.getElementById('FormsPH_ReqIsGOMEmployee0').enabled = false;
        document.getElementById('FormsPH_ReqNatureofEmployment').enabled = false;
        ValidatorEnable(document.getElementById('FormsPH_reqEmployed'), false);
        //  document.getElementById('FormsPH_ReqIsExService0').enabled = false;

        trEmployed.style.display = "none";
        //trGovEmployee.style.display = "none";

        //   trExServiceman.style.display = "none";


        // $("#FormsPH_ddlIsGOMEmployee").val('N');
        $("#FormsPH_ddlNatureofEmployment").val('');
        //   $("#FormsPH_ddlIsExService").val('N');
        $("#FormsPH_ddlEmployed").val('');

    }
}
function IsChhatanishuda(object) {
    var val = $("#FormsPH_ddlIsChhatanishuda").val();
    var txtExServiceYears = $("#FormsPH_txtChhatanishudaYears").val();
    if (val != "" && val == "Y") {
        $("#FormsPH_tblChhatanishuda").hide();
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceYears'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceMonths'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqExServiceDays'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaYears'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaMonths'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaDays'), false);
        //ValidatorValidate(FormsPH_ReqExServiceYears); 
    }

    else {
        $("#FormsPH_tblChhatanishuda").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaYears'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaMonths'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqChhatanishudaDays'), false);




        $("#FormsPH_txtChhatanishudaYears").val('');
        $("#FormsPH_txtChhatanishudaMonths").val('');
        $("#FormsPH_txtChhatanishudaDays").val('');
    }
}





function IsSportsman2(object) {
    var val = $("#FormsPH_ddlIsSportsman").val();

    if (val != "" && val == "Y") {
        $("#FormsPH_tbSportsManDet").show();
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternational'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsIOC'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolSAI'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsWomenSAI'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolGFI'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIOC'), true);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIFAIOC'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalIOC'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalNFAIOC'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateMOA'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateSOAMOA'), true);
        //ValidatorEnable(document.getElementById('FormsPH_ReqIsOther'), true);
        //        document.getElementById('FormsPH_ReqIsInternational').enabled = true;
        //        document.getElementById('FormsPH_ReqIsIOC').enabled = true;
        //        document.getElementById('FormsPH_ReqIsSchoolSAI').enabled = true;
        //        //document.getElementById('FormsPH_ReqIsWomenSAI').enabled = true;
        //        document.getElementById('FormsPH_ReqIsSchoolGFI').enabled = true;
        //        document.getElementById('FormsPH_ReqIsInternationalIOC').enabled = true;
        //        document.getElementById('FormsPH_ReqIsInternationalIFAIOC').enabled = true;
        //        document.getElementById('FormsPH_ReqIsNationalIOC').enabled = true;
        //        document.getElementById('FormsPH_ReqIsNationalNFAIOC').enabled = true;
        //        document.getElementById('FormsPH_ReqIsStateMOA').enabled = true;
        //        document.getElementById('FormsPH_ReqIsStateSOAMOA').enabled = true;
        //        document.getElementById('FormsPH_ReqIsOther').enabled = true;

        //        document.getElementById('FormsPH_ReqIsRuralSNSAI').enabled = true;
        //        document.getElementById('FormsPH_ReqIsWomenSNSAI').enabled = true;
        //        document.getElementById('FormsPH_ReqIsStateLevelSGFI').enabled = true;
        //        document.getElementById('FormsPH_ReqIsAllIndiaInterUC').enabled = true;

        //  document.getElementById('FormsPH_rfvVikramAward').enabled = true;
        document.getElementById('FormsPH_ReqDdlSpNote').enabled = true;
        document.getElementById('FormsPH_ReqSpVerDtAdg').enabled = true;
        document.getElementById('FormsPH_ReqOGC').enabled = true;
        document.getElementById('FormsPH_ReqAG').enabled = true;
        document.getElementById('FormsPH_ReqWGC').enabled = true;
        document.getElementById('FormsPH_ReqAC').enabled = true;
        document.getElementById('FormsPH_ReqCG').enabled = true;
        document.getElementById('FormsPH_ReqCWC').enabled = true;
        document.getElementById('FormsPH_ReqYO').enabled = true;
        document.getElementById('FormsPH_ReqGMC').enabled = true;
        document.getElementById('FormsPH_ReqPg').enabled = true;
        document.getElementById('FormsPH_ReqPAG').enabled = true;
        document.getElementById('FormsPH_ReqWPG').enabled = true;
        document.getElementById('FormsPH_ReqGOWIUSB').enabled = true;
        document.getElementById('FormsPH_ReqSF').enabled = true;
        document.getElementById('FormsPH_ReqGMA').enabled = true;
        document.getElementById('FormsPH_ReqJunWC').enabled = true;
        document.getElementById('FormsPH_ReqYCWG').enabled = true;
        document.getElementById('FormsPH_ReqJunGAC').enabled = true;
        document.getElementById('FormsPH_ReqJunGCWC').enabled = true;
        document.getElementById('FormsPH_ReqINMAC').enabled = true;
        document.getElementById('FormsPH_ReqNGC').enabled = true;
        document.getElementById('FormsPH_ReqRNCComp').enabled = true;
        document.getElementById('FormsPH_ReqPONCComp').enabled = true;
        document.getElementById('FormsPH_ReqNaScGComp').enabled = true;
        document.getElementById('FormsPH_ReqNaRuralWGComp').enabled = true;
        document.getElementById('FormsPH_ReqAIIUGComp').enabled = true;
        document.getElementById('FormsPH_ReqInMComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLSGrpCComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLScGComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLRAWGComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLIUCompA').enabled = true;
        document.getElementById('FormsPH_ReqStateLTGComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLPOGComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLDGComp').enabled = true;
        document.getElementById('FormsPH_ReqStateLJunGrpCComp').enabled = true;
        document.getElementById('FormsPH_ReqPISGrpNGComp').enabled = true;
        document.getElementById('FormsPH_ReqSGrp').enabled = true;
        document.getElementById('FormsPH_ReqIsOther').enabled = true;
        document.getElementById('FormsPH_ReqDdlNJunGrpCComp').enabled = true;
    }
    else {
        $("#FormsPH_tbSportsManDet").hide();

        //        $("#FormsPH_ddlIsInternational").val("");
        //        $("#FormsPH_ddlIsIOC").val("");
        //        $("#FormsPH_ddlIsSchoolSAI").val("");
        //        $("#FormsPH_ddlIsWomenSAI").val("");
        //        $("#FormsPH_ddlIsSchoolGFI").val("");
        //        $("#FormsPH_ddlIsInternationalIOC").val("");

        //        $("#FormsPH_ddlIsInternationalIFAIOC").val("");
        //        $("#FormsPH_ddlIsRuralSNSAI").val("");
        //        $("#FormsPH_ddlIsWomenSNSAI").val("");


        //        $("#FormsPH_ddlIsNationalIOC").val("");
        //        $("#FormsPH_ddlIsNationalNFAIOC").val("");
        //        $("#FormsPH_ddlIsStateMOA").val("");
        //        $("#FormsPH_ddlIsStateSOAMOA").val("");

        //        $("#FormsPH_ddlIsStateLevelSGFI").val("");
        //        $("#FormsPH_ddlIsAllIndiaInterUC").val("");


        $("#FormsPH_DdlSpNote").val("");
        $("#FormsPH_TxtSpVerDtAdg").val("");
        $("#FormsPH_TxtSPVerRepNo").val("");
        $("#FormsPH_TxtSPVerRepDt").val("");
        $("#FormsPH_DdlOGC").val("");
        $("#FormsPH_DdlAG").val("");
        $("#FormsPH_DdlWGC").val("");
        $("#FormsPH_DdlAC").val("");
        $("#FormsPH_DdlCG").val("");
        $("#FormsPH_DdlCWC").val("");
        $("#FormsPH_DdlYO").val("");
        $("#FormsPH_DdlGMC").val("");
        $("#FormsPH_DdlPg").val("");
        $("#FormsPH_DdlPAG").val("");
        $("#FormsPH_DdlWPG").val("");
        $("#FormsPH_DdlGOWIUSB").val("");
        $("#FormsPH_DdlSF").val("");
        $("#FormsPH_DdlGMA").val("");
        $("#FormsPH_DdlJunWC").val("");
        $("#FormsPH_DdlYCWG").val("");
        $("#FormsPH_DdlJunGAC").val("");
        $("#FormsPH_DdlJunGCWC").val("");
        $("#FormsPH_DdlINMAC").val("");

        $("#FormsPH_DdlNGC").val("");
        $("#FormsPH_DdlRNCComp").val("");
        $("#FormsPH_DdlPONCComp").val("");
        $("#FormsPH_DdlNaRuralWGComp").val("");
        $("#FormsPH_DdlAIIUGComp").val("");
        $("#FormsPH_DdlInMComp").val("");
        $("#FormsPH_DdlNJunGrpCComp").val("");
        $("#FormsPH_DdlStateLSGrpCComp").val("");
        $("#FormsPH_DdlStateLScGComp").val("");
        $("#FormsPH_DdlStateLRAWGComp").val("");
        $("#FormsPH_DdlStateLIUCompA").val("");
        $("#FormsPH_DdlStateLTGComp").val("");

        $("#FormsPH_DdlStateLPOGComp").val("");
        $("#FormsPH_DdlStateLDGComp").val("");
        $("#FormsPH_DdlStateLJunGrpCComp").val("");
        $("#FormsPH_DdlPISGrpNGComp").val("");
        $("#FormsPH_DdlSGrp").val("");

        $("#FormsPH_ddlIsOther").val("");
        $("#FormsPH_LblNaScGComp").val("");
        //  $("#FormsPH_ddlVikramAward").val("");

        ValidatorEnable(document.getElementById('FormsPH_ReqDdlSpNote'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSpVerDtAdg'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOGC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAG'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqWGC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqCG'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqCWC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqYO'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGMC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPg'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPAG'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqWPG'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGOWIUSB'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSF'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqGMA'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqJunWC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqYCWG'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqJunGAC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqJunGCWC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqINMAC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNGC'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqRNCComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPONCComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNaScGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNaRuralWGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAIIUGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqInMComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLSGrpCComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLScGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLRAWGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLIUCompA'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLTGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLPOGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLDGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqStateLJunGrpCComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqPISGrpNGComp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSGrp'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIsOther'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqDdlNJunGrpCComp'), false);
        // ValidatorEnable(document.getElementById('FormsPH_rfvVikramAward'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternational'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsIOC'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolSAI'), false);
        //        //ValidatorEnable(document.getElementById('FormsPH_ReqIsWomenSAI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolGFI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIOC'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIFAIOC'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsRuralSNSAI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsWomenSNSAI'), false);


        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalIOC'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalNFAIOC'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateMOA'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateSOAMOA'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateLevelSGFI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsAllIndiaInterUC'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsOther'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsRuralSNSAI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsWomenSNSAI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsStateLevelSGFI'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIsAllIndiaInterUC'), false);

    }
}

function IsSportsmanInit() {

    ValidatorEnable(document.getElementById('FormsPH_ReqIsInternational'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsIOC'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolSAI'), false);
    //ValidatorEnable(document.getElementById('FormsPH_ReqIsWomenSAI'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsSchoolGFI'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIOC'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsInternationalIFAIOC'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalIOC'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsNationalNFAIOC'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsStateMOA'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsStateSOAMOA'), false);
    ValidatorEnable(document.getElementById('FormsPH_ReqIsOther'), false);

}

function IsSportsman1(object) {
    //       var val = $("#ddlIsSportsman").val();

    //       if (val == "N") {

    //            $("#ddlIsInternational").val("N");
    //            $("#ddlIsIOC").val("N");
    //            $("#ddlIsSchoolSAI").val("N");
    //            $("#ddlIsWomenSAI").val("N");
    //            $("#ddlIsSchoolGFI").val("N");
    //            $("#ddlIsInternationalIOC").val("N");

    //            $("#ddlIsInternationalIFAIOC").val("N");
    //            $("#ddlIsNationalIOC").val("N");
    //            $("#ddlIsNationalNFAIOC").val("N");
    //            $("#ddlIsStateMOA").val("N");

    //            $("#ddlIsStateSOAMOA").val("N");
    //            $("#ddlIsOther").val("N");
    //        } else if (val == "" || val == "Y") {
    //           $("#ddlIsInternational").val("");
    //           $("#ddlIsIOC").val("");
    //           $("#ddlIsSchoolSAI").val("");
    //           $("#ddlIsWomenSAI").val("");
    //           $("#ddlIsSchoolGFI").val("");
    //           $("#ddlIsInternationalIOC").val("");

    //           $("#ddlIsInternationalIFAIOC").val("");
    //           $("#ddlIsNationalIOC").val("");
    //           $("#ddlIsNationalNFAIOC").val("");
    //           $("#ddlIsStateMOA").val("");

    //           $("#ddlIsStateSOAMOA").val("");
    //           $("#ddlIsOther").val("");
    //       }
    var val = $("#FormsPH_ddlIsSportsman").val();

    if (val != "" && val == "Y") {
        tbSportsManDet.style.display = none;
        $("#FormsPH_tbSportsManDet").show();
        //        $("#RW__RSD").show();
        //        $("#ddlIsInternational").show();
        //        $("#ddlIsIOC").show();
        //        $("#ddlIsSchoolSAI").show();
        //        $("#ddlIsWomenSAI").show();
        //        $("#ddlIsSchoolGFI").show();
        //        $("#ddlIsInternationalIOC").show();

        //        $("#ddlIsInternationalIFAIOC").show();
        //        $("#ddlIsNationalIOC").show();
        //        $("#ddlIsNationalNFAIOC").show();
        //        $("#ddlIsStateMOA").show();

        //        $("#ddlIsStateSOAMOA").show();
        //        $("#ddlIsOther").show();


        //        $("#RegistrationForm__LBLS2").show();
        //        $("#RegistrationForm__LBLS3").show();
        //        $("#RegistrationForm__LBLS4").show();
        //        $("#RegistrationForm__LBLS5").show();
        //        $("#RegistrationForm__LBLS6").show();

        //        $("#RegistrationForm__LBLS7").show();
        //        $("#RegistrationForm__LBLS8").show();
        //        $("#RegistrationForm__LBLS9").show();
        //        $("#RegistrationForm__LBLS10").show();

        //        $("#RegistrationForm__LBLS11").show();
        //        $("#RegistrationForm__LBLS12").show();
        //        $("#RegistrationForm__LBLS13").show();
    }
    else {
        $("#FormsPH_tbSportsManDet").hide();
        //        $("#RW__RSD").hide();
        //        $("#ddlIsInternational").hide();
        //        $("#ddlIsIOC").hide();
        //        $("#ddlIsSchoolSAI").hide();
        //        $("#ddlIsWomenSAI").hide();
        //        $("#ddlIsSchoolGFI").hide();
        //        $("#ddlIsInternationalIOC").hide();

        //        $("#ddlIsInternationalIFAIOC").hide();
        //        $("#ddlIsNationalIOC").hide();
        //        $("#ddlIsNationalNFAIOC").hide();
        //        $("#ddlIsStateMOA").hide();

        //        $("#ddlIsStateSOAMOA").hide();
        //        $("#ddlIsOther").hide();


        //        $("#RegistrationForm__LBLS2").hide();
        //        $("#RegistrationForm__LBLS3").hide();
        //        $("#RegistrationForm__LBLS4").hide();
        //        $("#RegistrationForm__LBLS5").hide();
        //        $("#RegistrationForm__LBLS6").hide();

        //        $("#RegistrationForm__LBLS7").hide();
        //        $("#RegistrationForm__LBLS8").hide();
        //        $("#RegistrationForm__LBLS9").hide();
        //        $("#RegistrationForm__LBLS10").hide();

        //        $("#RegistrationForm__LBLS11").hide();
        //        $("#RegistrationForm__LBLS12").hide();
        //        $("#RegistrationForm__LBLS13").hide();

    }

}

function ValidateNonCremyDate() {


    var dateString = document.getElementById('FormsPH_txtNonCreamyLayerCertiDate').value;

    var dateString = dateString.split('/');
    var myDate = new Date(dateString[2], dateString[1] * 1 - 1, dateString[0]);


    var today = new Date();
    if (myDate > today) {
        alert('You cannot enter a date in the future!.');
        document.getElementById('FormsPH_txtNonCreamyLayerCertiDate').value = "";
        return;
    }
}



function CheckBlackdate1() {
    var From_Date = document.getElementById('FormsPH_txtFromBlackListDT').value;
    var To_Date = document.getElementById('FormsPH_txtToBlackListDT').value;

    var From_Date = From_Date.split('/');
    var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);

    var To_Date = To_Date.split('/');
    var To_Date = new Date(To_Date[2], To_Date[1] * 1 - 1, To_Date[0]);


    if (new Date(From_Date) > new Date(To_Date)) {

        alert('From Date Should be less than To date.');
        document.getElementById('FormsPH_txtToBlackListDT').value = '';
        return false;
    }
}



function IsSportsman() {
    var val = $("#FormsPH_ddlIsSportsman").val();

    if (val != "" && val == "Y") {

        $("#FormsPH_ddlIsInternational").show();
        $("#FormsPH_ddlIsIOC").show();
        $("#FormsPH_ddlIsSchoolSAI").show();
        $("#ddlIsWomenSAI").show();
        $("#FormsPH_ddlIsSchoolGFI").show();
        $("#FormsPH_ddlIsInternationalIOC").show();

        $("#FormsPH_ddlIsInternationalIFAIOC").show();
        $("#FormsPH_ddlIsNationalIOC").show();
        $("#FormsPH_ddlIsNationalNFAIOC").show();
        $("#FormsPH_ddlIsStateMOA").show();

        $("#FormsPH_ddlIsStateSOAMOA").show();
        $("#FormsPH_ddlIsOther").show();

        $("#FormsPH_Address_ddlIsInternational_LBL").show();
        $("#FormsPH_Address_ddlIsIOC_LBL").show();
        $("#FormsPH_Address_ddlIsSchoolSAI_LBL").show();
        $("#FormsPH_Address_ddlIsWomenSAI_LBL").show();
        $("#FormsPH_Address_ddlIsSchoolGFI_LBL").show();
        $("#FormsPH_Address_ddlIsInternationalIOC_LBL").show();

        $("#FormsPH_Address_ddlIsInternationalIFAIOC_LBL").show();
        $("#FormsPH_Address_ddlIsNationalIOC_LBL").show();
        $("#FormsPH_Address_ddlIsNationalNFAIOC_LBL").show();
        $("#FormsPH_Address_ddlIsStateMOA_LBL").show();

        $("#FormsPH_Address_ddlIsStateSOAMOA_LBL").show();
        $("#FormsPH_Address_ddlIsOther_LBL").show();
    }
    else {
        $("#FormsPH_ddlIsInternational").hide();
        $("#FormsPH_ddlIsIOC").hide();
        $("#FormsPH_ddlIsSchoolSAI").hide();
        $("#FormsPH_ddlIsWomenSAI").hide();
        $("#FormsPH_ddlIsSchoolGFI").hide();
        $("#FormsPH_ddlIsInternationalIOC").hide();

        $("#FormsPH_ddlIsInternationalIFAIOC").hide();
        $("#FormsPH_ddlIsNationalIOC").hide();
        $("#FormsPH_ddlIsNationalNFAIOC").hide();
        $("#FormsPH_ddlIsStateMOA").hide();

        $("#FormsPH_ddlIsStateSOAMOA").hide();
        $("#FormsPH_ddlIsOther").hide();

        $("#FormsPH_Address_ddlIsInternational_LBL").hide();
        $("#FormsPH_Address_ddlIsIOC_LBL").hide();
        $("#FormsPH_Address_ddlIsSchoolSAI_LBL").hide();
        $("#FormsPH_Address_ddlIsWomenSAI_LBL").hide();
        $("#FormsPH_Address_ddlIsSchoolGFI_LBL").hide();
        $("#FormsPH_Address_ddlIsInternationalIOC_LBL").hide();

        $("#FormsPH_Address_ddlIsInternationalIFAIOC_LBL").hide();
        $("#FormsPH_Address_ddlIsNationalIOC_LBL").hide();
        $("#FormsPH_Address_ddlIsNationalNFAIOC_LBL").hide();
        $("#FormsPH_Address_ddlIsStateMOA_LBL").hide();

        $("#FormsPH_Address_ddlIsStateSOAMOA_LBL").hide();
        $("#FormsPH_Address_ddlIsOther_LBL").hide();
    }

}



function MOLValidateField(FieldName, FieldValue) {
    var t_Return = "";

    if (FieldName == "RegistrationForm__PinCode") {
        t_Return = ValidatePinCode(FieldValue);
    }
    else if (FieldName == "RegistrationForm__DOB") {
        t_Return = MOLValidateDOB(FieldValue);
    }

    else {
    }

    return t_Return;
}





function ValidatePinCode(FieldValue) {
    var t_Return = "";

    if (FieldValue.length > 0) {
        if (FieldValue.length == 6) {
            if (FieldValue.charAt(0) != '4') {
                t_Return = MOLMessages[2];
            }
        }
        else {
            t_Return = MOLMessages[1];
        }
    }

    return t_Return;
}


function DateChanged(obj) {
    var t_Date = obj.value;

    if (validateDateFormat(t_Date) && t_Date != "") {
        var txtAge = document.getElementById(obj.id.replace('FormsPH_txtDOB', 'FormsPH_txtAge'))

        txtAge.value = MOLCalculateAge(t_Date);
        if (txtAge.value == 0) {
            obj.value = "";
        }
    }
}


function PrintDocument() {

    window.print();
}




function MOLValidateField(id, val) {
    if (id != undefined && (id == 'RegistrationForm__ISPossesAsPerAdv' && val != 'Y')) {
        return "The qualification criteria is not as per advertisement";

    }
    else if (id != undefined && (id == 'Registration_Experience_Details__PeriodDays' && val != '')) {


    }
    else if (id != undefined && (id == 'Registration_Experience_Details__FromDate' && val != '')) {


    }
}

function ShowSign() {
    //alert('Hii');
    $("#Registration_Experience_Details__Signature").val($("#RegistrationForm__Signature").val());
}

//function Checkdate() {
//    var From_Date = $("#Registration_Experience_Details__FromDate").val();

//    var From_Date = From_Date.split('/');
//    var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);

//    var To_Date = GetTodaysdate().split('/');
//    var To_Date = new Date(To_Date[2], To_Date[1] * 1 - 1, To_Date[0]);


//    if (new Date(From_Date) > new Date(To_Date)) {
//        alert('From Date Should be less than todays date.');
//        $("#Registration_Experience_Details__FromDate").val("");
//        return false;
//    }
//    else
//        CalPeriod();
//}



function IsPastonLoad() {
    if ($("#Registration_Experience_Details__IsPresent").val() != undefined) {
        if ($("#Registration_Experience_Details__IsPresent").val().toUpperCase() == "PR") {
            $("#Registration_Experience_Details__ToDate").removeAttr("MOLM");
            $("#Registration_Experience_Details__ToDate").hide();
            $("#err_lbl_Registration_Experience_Details__ToDate").hide();
            $("#FormsHeadContent_Experience_Registration_Experience_Details__ToDate_LBL").hide();

        }
        else {
            $("#Registration_Experience_Details__ToDate").attr("MOLM", "C");
            $("#Registration_Experience_Details__ToDate").show();
            $("#FormsHeadContent_Experience_Registration_Experience_Details__ToDate_LBL").show();

        }
    }
    SetPercentageMandetoryOnLoad();
}





function IsResultPassOnLoad() {
    if ($("#Registration_Qualification_Details__ResultCode").val() != undefined && $("#Registration_Qualification_Details__ResultCode").val().toUpperCase() == "A") {
        $("#Registration_Qualification_Details__ResultDate").removeAttr("MOLM");
        $("#Registration_Qualification_Details__Attempts").removeAttr("MOLM");
        $("#Registration_Qualification_Details__Percentage").removeAttr("MOLM");
        $("#Registration_Qualification_Details__CourseDuration").removeAttr("MOLM");
        $("#err_lbl_Registration_Qualification_Details__ResultDate").text("");
        $("#err_lbl_Registration_Qualification_Details__Attempts").text("");
        $("#err_lbl_Registration_Qualification_Details__Percentage").text("");
        $("#err_lbl_Registration_Qualification_Details__CourseDuration").text("");
        $("#Registration_Qualification_Details__Percentage").attr("readonly", true);
        $("#Registration_Qualification_Details__Class").attr("disabled", true);


    }
    else {
        $("#Registration_Qualification_Details__ResultDate").attr("MOLM", "C");
        $("#Registration_Qualification_Details__Attempts").attr("MOLM", "C");
        $("#Registration_Qualification_Details__Percentage").attr("MOLM", "C");
        $("#Registration_Qualification_Details__CourseDuration").attr("MOLM", "C");

        $("#Registration_Qualification_Details__Percentage").removeAttr("readonly");
        $("#Registration_Qualification_Details__Class").attr("disabled", false);
    }
}





function GetTodaysdate() {

    return $("#FormsPH_HdnTodayDt").val();
}
//Set todays date   
//if ($("#HdnTodayDt").val() == "") {

//}

//        var d = new Date();
//        var dat = d.getDate();
//        if (parseInt(dat) < 10)
//            dat = "0" + dat;
//        var mon = d.getMonth() + 1;
//        if (parseInt(mon) < 10)
//            mon = "0" + mon;
//        var year = d.getFullYear();
//        var todayDate = dat + "/" + mon + "/" + year;
//}
//    else
//        return $("#HdnTodayDt").val();    



function SetBlackListedDefault() {
    if ($("#FormsPH_ddlIsCourtCase").val() == "")
        $("#FormsPH_ddlIsCourtCase").val("N");
    if ($("#FormsPH_ddlIsDisciplinaryActionByCouncil").val() == "")
        $("#FormsPH_ddlIsDisciplinaryActionByCouncil").val("N");
    if ($("#FormsPH_ddlIsActionAgainstYou").val() == "")
        $("#FormsPH_ddlIsActionAgainstYou").val("N");
    if ($("#FormsPH_RegistrationForm__WasCourtCaseFiled").val() == "")
        $("#FormsPH_RegistrationForm__WasCourtCaseFiled").val("N");
    if ($("#FormsPH_ddlIsBlackListed").val() == "")
        $("#FormsPH_ddlIsBlackListed").val("N");
}



//    if ($("#Registration_Qualification_Details__ResultCode").val().toUpperCase() == "A") {
//        var From_Date = $("#Registration_Qualification_Details__ResultDate").val();
//        var From_Date = From_Date.split('/');
//        var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);
//        if (new Date(From_Date) < new Date()) {
//            alert('Result Date Should be greater than todays date.');
//            $("#Registration_Qualification_Details__ResultDate").val("");
//            return false;
//        }
//    }
//    else {
//        var From_Date = $("#Registration_Qualification_Details__ResultDate").val();
//        var From_Date = From_Date.split('/');
//        var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);
//        if (new Date(From_Date) > new Date()) {
//            alert('Result Date Should be less than todays date.');
//            $("#Registration_Qualification_Details__ResultDate").val("");
//            return false;
//        }
//    }

function CheckBlackFromdate() {
    var From_Date = document.getElementById('FormsPH_txtFromBlackListDT').value;
    var To_Date = document.getElementById('FormsPH_txtToBlackListDT').value;
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var From_Date = From_Date.split('/');
    var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);

    var To_Date = To_Date.split('/');
    var To_Date = new Date(To_Date[2], To_Date[1] * 1 - 1, To_Date[0]);


    if (new Date(From_Date) > new Date(To_Date)) {
        if (HdnLangid == 1) {
            alert('From Date Should be less than To date.');
        }
        else {
            alert('From Date Should be less than To date.');
        }
        document.getElementById('FormsPH_txtFromBlackListDT').value = '';
        return false;
    }
}



function CheckBlackdate() {
    var From_Date = document.getElementById('FormsPH_txtFromBlackListDT').value;
    var To_Date = document.getElementById('FormsPH_txtToBlackListDT').value;
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var From_Date = From_Date.split('/');
    var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);

    var To_Date = To_Date.split('/');
    var To_Date = new Date(To_Date[2], To_Date[1] * 1 - 1, To_Date[0]);




    if (new Date(From_Date) > new Date(To_Date)) {
        if (HdnLangid == 1) {
            alert('To date Should be greater than From date.');
        }
        else {
            alert('To date Should be greater than From date.');
        }
        document.getElementById('FormsPH_txtToBlackListDT').value = '';
        return false;
    }
}

function CheckForMarathiChar(obj) {
    var SpCharacters = /^[a-zA-Z_ ]*$/;
    var name = $("#" + obj.id)
    if (!SpCharacters.test(name.val())) {
        alert("Only English alphabets are allowed");
        $("#" + obj.id).val("");
    }
}

function ontxtPercentageChange() {

    var HdnLangid = $("#FormsPH_hdnLangID").val(); // || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "NET/SLET/SET"
    if ($("#FormsPH_ddlResultCode").val().toUpperCase() == "P") {
        var Percentageval = $('#FormsPH_txtPercentage').val();
        var Percentage = parseFloat(Percentageval);
        if (Percentage > 100) {
            if (HdnLangid == 1) {
                alert('Percentage should be less than 100');
            } else {
                alert('Percentage should be less than 100');
            }
            $('#FormsPH_txtPercentage').val('');
        }
        else if (Percentage <= 0) {
            if (HdnLangid == 1) {
                alert('Percentage should be greater than 0');
            }
            else {
                alert('Percentage should be greater than 0');
            }
            $('#FormsPH_txtPercentage').val('');
        }
    }
    else {

    }
}



function GetFileid(obj) {
    var hdn = document.getElementById(obj.id.replace('btnSaveImage', 'hdnImage'));
    var img = document.getElementById('__IMG');
    hdn.value = "ffff";
}


function CheckResultDate(obj) {
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    if (document.getElementById(obj.id.replace('FormsPH_txtResultDate', 'FormsPH_ddlResultCode')).value.toUpperCase() == "A") {
        var From_Date = obj.value;

        var From_Date = From_Date.split('/');
        var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);
        if (new Date(From_Date) < new Date()) {
            if (HdnLangid == 1) {
                alert('Result Date Should be greater than todays date.');
            } else {
                alert('Result Date Should be greater than todays date.');
            }
            obj.value = "";
            return false;
        }
        else {
            //            if (new Date(From_Date) > new Date()) {
            //                alert('Result Date Should be less than todays date.');
            //                obj.value = "";
            //                return false;
            //            }
        }
    }
    else {
        var From_Date = obj.value;
        var From_Date = From_Date.split('/');
        var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);
        if (!(new Date(From_Date) <= new Date())) {

            if (HdnLangid == 1) {
                alert('Result Date Should be less than todays date.');
            }
            else {
                alert('Result Date Should be less than todays date.');
            }
            obj.value = "";
            return false;
        }
    }
}



//function CheckPercentage() {
//    var val = $(this).val();
//    if (val.indexOf('.') == -1) {
//        if (val > 100) {
//            $(this).val(val.substring(0, val.length - 1));
//            return false;
//        }
//    }
//}


//function IsPastonLoad() {
//    if ($("#Registration_Experience_Details__IsPresent").val() != undefined) {
//        if ($("#Registration_Experience_Details__IsPresent").val().toUpperCase() == "PR") {
//            $("#FormsPH_ToDate").removeAttr("MOLM");
//            $("#FormsPH_ToDate").hide();
//            $("#err_lbl_FormsPH_ToDate").hide();
//            $("#FormsHeadContent_Experience_FormsPH_ToDate_LBL").hide();

//        }
//        else {
//            $("#FormsPH_ToDate").attr("MOLM", "C");
//            $("#FormsPH_ToDate").show();
//            $("#FormsHeadContent_Experience_FormsPH_ToDate_LBL").show();

//        }
//    }
//    SetPercentageMandetoryOnLoad();
//}

function IsFullOrOther(obj) {
    var val = obj.value;
    var lblFullTime = document.getElementById(obj.id.replace('FormsPH_NatureOfAppointment', 'FormsPH_lblFullTime'));
    var FullTime = document.getElementById(obj.id.replace('FormsPH_NatureOfAppointment', 'FormsPH_fulltime'));

    if (val != "" && (val == "DW" || val == "WC" || val == "CB" || val == "H")) {
        lblFullTime.style.display = "";
        FullTime.style.display = "";
    }
    else {
        lblFullTime.style.display = "none";
        FullTime.style.display = "none";
    }
    if (val != "" && (val == "AH" || val == "Pr" || val == "T" || val == "CB")) {

        $("#FormsPH_TrnatureofappontmentResult").show();


        document.getElementById('FormsPH_ReqNatureOfAppotLetterNo').enabled = false;
        document.getElementById('FormsPH_ReqNatureOfAppointLetterDate').enabled = false;

    }
    else {
        $("#FormsPH_TrnatureofappontmentResult").hide();

        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);


    }


}


function IsRTI(obj) {
    $("#FormsPH_TxtOtherNatureOfPost").val('');

    var val = obj.options[obj.selectedIndex].text;
    var TRIdResearch1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdResearch1'));
    var TRIdResearch2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdResearch2'));

    var TRIdTeaching1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching1'));
    var TRIdTeaching2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching2'));
    var TRIdTeaching3 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching3'));
    var TRIdTeaching4 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching4'));

    var TRIdIndustry1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdIndustry1'));
    var TRIdIndustry2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdIndustry2'));

    var LblSubject1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_LblSubject1'));
    var LblSubject11 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_LblSubject11'));

    //Clear Controls
    var TxtTitleOfProjrct = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtTitleOfProjrct'));
    var TxtNameandAddressOfCollege = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameandAddressOfCollege'));
    var txtNameofFundingEgency = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_txtNameofFundingEgency'));
    var txtAmountOfProject = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_txtAmountOfProject'));

    var ddllevel = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddllevel'));
    var Txtsubject = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_Txtsubject'));
    var TxtClass = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtClass'));
    var ddlApprovebyUniversity = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlApprovebyUniversity'));
    var TxtNameofCollege = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameofCollege'));
    var ddlApprovedBy = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlApprovedBy'));
    var TxtOther = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtOther'));

    var TxtNameofIndustry = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameofIndustry'));
    var ddlIndustrySize = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlIndustrySize'));
    var ddlmanegerialPost = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlmanegerialPost'));

    var ddlmanegerialPost = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlmanegerialPost'));

    if (val == "Research") {
        //        $("#FormsPH_tdTotalEmolument").hide();
        //        $("#FormsPH_tdTotalEmolument2").hide();

        $("#FormsPH_IdResearch1").show();
        $("#FormsPH_IdResearch2").show();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();

        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        //        TRIdResearch1.style.display = "";
        //        TRIdResearch2.style.display = "";
        //        TRIdTeaching1.style.display = "none";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "none";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "none";
        //        TRIdIndustry2.style.display = "none";

        //        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), true);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqTotalEmolument'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterDate'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);



        document.getElementById('FormsPH_ReqTitleOfProjrct').enabled = true;
        document.getElementById('FormsPH_ReqNameandAddressOfCollege').enabled = true;
        document.getElementById('FormsPH_ReqNameofFundingEgency').enabled = true;
        document.getElementById('FormsPH_ReqAmountOfProject').enabled = true;


        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqOtherNatureOfPost'), false);
        $("#FormsPH_TxtOtherNatureOfPost").hide();
    }
    else if (val == "Teaching") {
        //        $("#FormsPH_tdTotalEmolument").show();
        //        $("#FormsPH_tdTotalEmolument2").show();
        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").show();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").show();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();
        //        TRIdResearch1.style.display = "none";
        //        TRIdResearch2.style.display = "none";
        //        TRIdTeaching1.style.display = "";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "none";
        //        TRIdIndustry2.style.display = "none";
        //        LblSubject1.style.display = "none";
        //        LblSubject11.style.display = "none";
        //        Txtsubject.style.display = "none";

        //        document.getElementById('FormsPH_ReqTotalEmolument').enabled = true;
        //       document.getElementById('FormsPH_ReqApprovedByLetterNo').enabled = true;
        //        document.getElementById('FormsPH_ReqApprovedByLetterDate').enabled = true;
        //        document.getElementById('FormsPH_ReqNatureOfAppotLetterNo').enabled = true;
        //        document.getElementById('FormsPH_ReqNatureOfAppointLetterDate').enabled = true;
        //       

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), true);
        document.getElementById('FormsPH_ReqLevel').enabled = true;
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), true);
        document.getElementById('FormsPH_ReqNameofCollege').enabled = true;
        document.getElementById('FormsPH_ReqApprovedBy').enabled = true;
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqOtherNatureOfPost'), false);
        $("#FormsPH_TxtOtherNatureOfPost").hide();
    }
    else if (val == "Industry") {
        //        $("#FormsPH_tdTotalEmolument").hide();
        //        $("#FormsPH_tdTotalEmolument2").hide();
        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").show();
        $("#FormsPH_IdIndustry2").show();

        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        //        TRIdResearch1.style.display = "none";
        //        TRIdResearch2.style.display = "none";
        //        TRIdTeaching1.style.display = "none";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "none";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "";
        //        TRIdIndustry2.style.display = "";

        //        ValidatorEnable(document.getElementById('FormsPH_ReqTotalEmolument'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterDate'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        //        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), true);
        document.getElementById('FormsPH_ReqNameofIndustry').enabled = true;
        document.getElementById('FormsPH_ReqIndustrySize').enabled = true;
        document.getElementById('FormsPH_ReqmanegerialPost').enabled = true;

        ValidatorEnable(document.getElementById('FormsPH_ReqOtherNatureOfPost'), false);
        $("#FormsPH_TxtOtherNatureOfPost").hide();
    }
    else if (val == "Others") {


        $("#FormsPH_TxtOtherNatureOfPost").show();

        //        $("#FormsPH_tdTotalEmolument").hide();
        //        $("#FormsPH_tdTotalEmolument2").hide();

        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        //        TRIdResearch1.style.display = "none";
        //        TRIdResearch2.style.display = "none";
        //        TRIdTeaching1.style.display = "none";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "none";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "none";
        //        TRIdIndustry2.style.display = "none";

        //        ValidatorEnable(document.getElementById('FormsPH_ReqTotalEmolument'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterDate'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);
    }
    else {
        ValidatorEnable(document.getElementById('FormsPH_ReqOtherNatureOfPost'), false);
        $("#FormsPH_TxtOtherNatureOfPost").hide();

        //        $("#FormsPH_tdTotalEmolument").hide();
        //        $("#FormsPH_tdTotalEmolument2").hide();

        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        //        TRIdResearch1.style.display = "none";
        //        TRIdResearch2.style.display = "none";
        //        TRIdTeaching1.style.display = "none";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "none";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "none";
        //        TRIdIndustry2.style.display = "none";

        //        ValidatorEnable(document.getElementById('FormsPH_ReqTotalEmolument'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterDate'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);
    }
    TxtTitleOfProjrct.value = "";
    TxtNameandAddressOfCollege.value = "";
    txtNameofFundingEgency.value = "";
    txtAmountOfProject.value = "";

    ddllevel.selectedIndex = 0;
    Txtsubject.value = "";
    TxtClass.value = "";
    ddlApprovebyUniversity.value = "";
    TxtNameofCollege.value = "";
    ddlApprovedBy.selectedIndex = 0;
    TxtOther.value = "";

    TxtNameofIndustry.value = "";
    ddlIndustrySize.selectedIndex = 0;
    ddlmanegerialPost.selectedIndex = 0;

    IsLevel(ddllevel);
    IsApprovedBy(ddlApprovedBy);
}


function IsLevel(obj) {
    var val = obj.options[obj.selectedIndex].text;

    if (val == "Junior College" || val == "Under Graduate" || val == "Post Graduate") {
        $("#FormsPH_LblSubject1").show();
        $("#FormsPH_LblSubject11").show();
        $("#FormsPH_Txtsubject").show();
        $("#FormsPH_IdTeaching2").show();

        //        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), true);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), true);

        document.getElementById('FormsPH_ReqSubject').enabled = true;
        document.getElementById('FormsPH_ReqClass').enabled = true;
        document.getElementById('FormsPH_ReqApprovebyUniversity').enabled = true;

    }
    else {
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();
        $("#FormsPH_IdTeaching2").hide();

        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
    }

    $('#FormsPH_TxtClass').val('');
    $('FormsPH_ddlApprovebyUniversity').val('');
}

function IsApprovedBy(obj) {
    var val = obj.options[obj.selectedIndex].text;

    //    var LblOther = document.getElementById(obj.id.replace('FormsPH_ddlApprovedBy', 'FormsPH_LblOther'));
    //    var LblOther1 = document.getElementById(obj.id.replace('FormsPH_ddlApprovedBy', 'FormsPH_LblOther1'));
    //    var TxtOther = document.getElementById(obj.id.replace('FormsPH_ddlApprovedBy', 'FormsPH_TxtOther'));

    //    var TRIdTeaching4 = document.getElementById(obj.id.replace('FormsPH_ddlApprovedBy', 'FormsPH_IdTeaching4'));
    //    var TxtOther = document.getElementById(obj.id.replace('FormsPH_ddlApprovedBy', 'FormsPH_TxtOther'));

    if (val == "Others") {
        $("#FormsPH_IdTeaching4").show();
        //TRIdTeaching4.style.display = "";
        //        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), true);
        document.getElementById('FormsPH_ReqOther').enabled = true;
    }
    else {
        $("#FormsPH_IdTeaching4").hide();
        //TRIdTeaching4.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);
    }
    //TxtOther.value = "";
    $('#FormsPH_TxtOther').val('');

    if (val == "University" || val == "Government") {
        $("#FormsPH_TrapprovebyUni1").show();
        //        $("#FormsPH_TrnatureofappontmentResult").show();
        document.getElementById('FormsPH_ReqApprovedByLetterNo').enabled = true;
        document.getElementById('FormsPH_ReqApprovedByLetterDate').enabled = true;
        //        document.getElementById('FormsPH_ReqNatureOfAppotLetterNo').enabled = true;
        //        document.getElementById('FormsPH_ReqNatureOfAppointLetterDate').enabled = true;
    }
    else {
        $("#FormsPH_TrapprovebyUni1").hide();
        $("#FormsPH_TrnatureofappontmentResult").hide();

        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedByLetterDate'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppotLetterNo'), false);
        //        ValidatorEnable(document.getElementById('FormsPH_ReqNatureOfAppointLetterDate'), false);
    }
}

function IsGazetted(obj) {
    var val = obj.options[obj.selectedIndex].text;

    var LblGroup = document.getElementById(obj.id.replace('FormsPH_ddlGazetted', 'FormsPH_LblGroup'));
    var LblGroup1 = document.getElementById(obj.id.replace('FormsPH_ddlGazetted', 'FormsPH_LblGroup1'));
    var ddlgroup = document.getElementById(obj.id.replace('FormsPH_ddlGazetted', 'FormsPH_ddlgroup'));

    if (val == "Yes") {
        LblGroup.style.display = "";
        LblGroup1.style.display = "";
        ddlgroup.style.display = "";
        // ValidatorEnable(document.getElementById('FormsPH_ReqGroup'), true);
        document.getElementById('FormsPH_ReqGroup').enabled = true;
    }
    else {
        LblGroup.style.display = "none";
        LblGroup1.style.display = "none";
        ddlgroup.style.display = "none";
        ValidatorEnable(document.getElementById('FormsPH_ReqGroup'), false);
    }
    ddlgroup.selectedIndex = 0;
}


function Checkdate(obj) {
    var From_Date = obj.value;
    var From_Date = From_Date.split('/');
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);
    var today = new Date();

    if (new Date(From_Date) > new Date(today)) {
        if (HdnLangid == 1) {
            alert('From Date Should be less than todays date.');
        }
        else {
            alert('From Date Should be less than todays date.');
        }
        obj.value = "";
        return false;
    }
}


function ToDateValidation(obj1, obj2) {

    //var To_Date = obj.value;
    //var From_Date = document.getElementById(obj.id.replace('ToDate', 'FromDate'));
    var To_Date = obj1;
    var From_Date = obj2;
    var ToDate = To_Date.split('/');
    var ToDate = new Date(ToDate[2], ToDate[1] * 1 - 1, ToDate[0]);
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var Today_Date = new Date();


    if (From_Date == "") {
        if (HdnLangid == 1) {
            alert("Select From date First");
        }
        else {
            alert("Select From date First");
        }
        $("#FormsPH_ToDate").val("")
        return false;
    }
    if (To_Date == "")
        return false;

    if (new Date(ToDate) > new Date(Today_Date)) {
        if (HdnLangid == 1) {
            alert('To Date Should be less than todays date.');
        }
        else { alert('To Date Should be less than todays date.'); }
        $("#FormsPH_ToDate").val("");
        return false;
    }

    if (To_Date.length == 10) {
        var splits = To_Date.split("/");
        var dtTo_Date = new Date(splits[1] + "/" + splits[0] + "/" + splits[2]);
    }

    if (From_Date.length == 10) {
        var splits = From_Date.split("/");
        var dtFrom_Date = new Date(splits[1] + "/" + splits[0] + "/" + splits[2]);
    }

    var Days = Math.floor((dtTo_Date.getTime() - dtFrom_Date.getTime()) / (1000 * 60 * 60 * 24));
    if (Days < 0) {
        if (HdnLangid == 1) {
            alert("To Date Should be Greater Than From Date.");
        } else {
            alert('To Date Should be Greater Than From Date.');
        }
        $("#FormsPH_ToDate").val("");

        return false;
    }
    else {
        return true;
    }
}

//function CalPeriod(obj) {

//    var endDate = obj.value;
//    var startDate = document.getElementById(obj.id.replace('ToDate', 'FromDate')).value;

//    if (!ToDateValidation(endDate, startDate))
//        return false;

//    var ToDate = document.getElementById(obj.id.replace('ToDate', 'ToDate')).value;
//    var Year = document.getElementById(obj.id.replace('ToDate', 'PeriodYear')).value;
//    var Month = document.getElementById(obj.id.replace('ToDate', 'PeriodMonth')).value;
//    var Day = document.getElementById(obj.id.replace('ToDate', 'PeriodDays')).value;

//    var ExpendDate = endDate.split('/');
//    var ExpstartDate = startDate.split('/');

//    var date1 = new Date(ExpstartDate[2], ExpstartDate[1] - 1, ExpstartDate[0]);
//    var date2 = new Date(ExpendDate[2], ExpendDate[1] - 1, ExpendDate[0]);

//    //    var t_GRP = $("#FRMGRP").val();
//    //    var t_TMP = $("#FRMTMP").val();

//    var t_URL = "";
//    var t_Result = false;

//    t_URL = "../../RPS/Forms/RPSNewRegistration.aspx/GetYears";
//    t_Result = true;
//    var fees = 0;
//    $.ajax({ url: t_URL,
//        type: "POST",
//        contentType: "application/json",
//        data: JSON.stringify({ FDate: date1, TDate: date2 }),
//        dataType: "json",
//        success: function (msg) {
//            if (msg.d != "") {
//                var arr = msg.d.split('~');
//                if (arr.length == 3) {
//                    $("#FormsPH_PeriodDays").val(arr[2]);
//                    $("#FormsPH_PeriodMonth").val(arr[1]);
//                    $("#FormsPH_PeriodYear").val(arr[0]);
//                }
//            }
//        },
//        error: function (xhr, status) {
//            alert("An error occurred: " + status);
//        }
//    });

//}



function CalPeriod(obj) {


    var isPresent = document.getElementById(obj.id.replace('FormsPH_FromDate', 'FormsPH_IsPresent'));
    var startDate = "";
    var ToDate = "";
    if (isPresent.value == "Pr") {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm } var today = dd + '/' + mm + '/' + yyyy;
        ToDate = today;
        startDate = obj.value;
    }
    else {
        var endDate = obj.value;

        var startDate = document.getElementById(obj.id.replace('FormsPH_ToDate', 'FormsPH_FromDate')).value;

        if (!ToDateValidation(endDate, startDate))
            return false;



        if (obj.id.indexOf('FromDate') > -1) {
            startDate = obj.value;
            ToDate = document.getElementById(obj.id.replace('FormsPH_FromDate', 'FormsPH_ToDate')).value;
        }
        else if (obj.id.indexOf('ToDate') > -1) {
            startDate = document.getElementById(obj.id.replace('FormsPH_ToDate', 'FormsPH_FromDate')).value;
            ToDate = obj.value;
        }

    }

    if (ToDate == "" || startDate == "") {
        $("#FormsPH_PeriodDays").val("0");
        $("#FormsPH_PeriodMonth").val("0");
        $("#FormsPH_PeriodYear").val("0");
        return;
    }
    var ExpendDate = ToDate.split('/');
    var ExpstartDate = startDate.split('/');

    var date1 = new Date(ExpstartDate[2], ExpstartDate[1] - 1, ExpstartDate[0]);
    var date2 = new Date(ExpendDate[2], ExpendDate[1] - 1, ExpendDate[0]);

    var diff_date = date2 - date1;

    var num_years = diff_date / 31536000000;
    var num_months = (diff_date % 31536000000) / 2628000000;
    var num_days = ((diff_date % 31536000000) % 2628000000) / 86400000;

    $("#FormsPH_PeriodDays").val('' + Math.floor(num_days));
    $("#FormsPH_PeriodMonth").val('' + Math.floor(num_months));
    $("#FormsPH_PeriodYear").val('' + Math.floor(num_years));


}


function IsPast(obj) {
    var IsPresent = obj.value;
    var lblToDate = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDate'));
    var ToDate = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_ToDate'));
    var ToDateStar = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDateStar'));

    var FromDate = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_FromDate'));
    var PeriodYear = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_PeriodYear'));
    var PeriodMonth = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_PeriodMonth'));
    var PeriodDays = document.getElementById(obj.id.replace('FormsPH_IsPresent', 'FormsPH_PeriodDays'));
    var lblPRCertificateNo = document.getElementById('FormsPH_lblPRCertificateNo');
    var lbluploadPRExpCertificate = document.getElementById('FormsPH_lbluploadPRExpCertificate');
    var lblExpCertificateNo = document.getElementById('FormsPH_lblExpCertificateNo');
    var lbluploadCertificate = document.getElementById('FormsPH_lbluploadCertificate');

    if (IsPresent.toUpperCase() == "PR") {

        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDate')).hide();
        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_ToDate')).hide();
        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDateStar')).hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqToDate'), false);
        lblPRCertificateNo.style.display = "";
        lbluploadPRExpCertificate.style.display = "";
        lblExpCertificateNo.style.display = "none";
        lbluploadCertificate.style.display = "none";

    }
    else {
        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDate')).show();
        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_ToDate')).show();
        $("#" + obj.id.replace('FormsPH_IsPresent', 'FormsPH_lblToDateStar')).show();
        // ValidatorEnable(document.getElementById('FormsPH_ReqToDate'), true);
        document.getElementById('FormsPH_ReqToDate').enabled = true;
        lblPRCertificateNo.style.display = "none";
        lbluploadPRExpCertificate.style.display = "none";
        lblExpCertificateNo.style.display = "";
        lbluploadCertificate.style.display = "";
    }
    ToDate.value = "";
    FromDate.value = "";
    PeriodYear.value = "";
    PeriodMonth.value = "";
    PeriodDays.value = "";
}

function ResetAfterQualChanged() {

}

function ResultTypeChange() {

    $("#FormsPH_trCGPA").hide();
    $("#FormsPH_tdlbgrade").hide();
    $("#FormsPH_tdPercentage").show();
    $("#FormsPH_trOtherClass").hide();


    if ($("#FormsPH_ddlresulttype").val() == "M") {
        $("#FormsPH_trMarks").show();
        $("#FormsPH_lblPercentage").show();
        $("#FormsPH_tdlbgrade").hide();
        $("#FormsPH_lblNormalizPercentage").hide();
        $("#FormsPH_trOtherClass").show();

        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), true);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), true);
        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), true);
        ontxtPercentageCalculation('OutOf');

    }
    else if ($("#FormsPH_ddlresulttype").val() == "C") {

        $("#FormsPH_lblNormalizPercentage").show();
        $("#FormsPH_lblPercentage").hide();
        $("#FormsPH_trMarks").hide();
        $("#FormsPH_tdlbgrade").hide();
        $("#FormsPH_trCGPA").show();
        $("#FormsPH_trOtherClass").show();

        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), true);
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), true);
        $('#FormsPH_txtPercentage').attr("disabled", false);

    }
    else if ($("#FormsPH_ddlresulttype").val() == "G") {
        $("#FormsPH_tdlbgrade").show();
        $("#FormsPH_lblNormalizPercentage").show();
        $("#FormsPH_trMarks").hide();
        $("#FormsPH_lblPercentage").hide();
        $("#FormsPH_trOtherClass").show();

        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), true);
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), true);
        $('#FormsPH_txtPercentage').attr("disabled", false);
    }
    else {
        $("#FormsPH_lblPercentage").hide();
        $("#FormsPH_tdlbgrade").hide();
        $("#FormsPH_trMarks").hide();
        $("#FormsPH_lblNormalizPercentage").hide();
        $("#FormsPH_tdPercentage").hide();
        $("#FormsPH_trOtherClass").hide();
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
    }
    $('#FormsPH_txtmarks').val('');
    $('#FormsPH_TxtOutOf').val('');
    $('#FormsPH_txtCGPA').val('');
    $('#FormsPH_ddlgrade').val('');
    $('#FormsPH_txtPercentage').val('');

}


function QualificationTypeChange() {
    $("#FormsPH_TxtOtherDegree").val('');
    $("#FormsPH_TxtOtherSubject").val('');
    $("#FormsPH_txtCompulsorySubjects").val('');
    $("#FormsPH_txtOptionalSubjects").val('');
    $("#FormsPH_TxtRemarks").val('');
    $("#FormsPH_TxtCouncilRegNo").val('');
    $("#FormsPH_TxtCouncilRegDt").val('');
    $("#FormsPH_TxtDtOfRenewal").val('');
    $("#FormsPH_DdlNameOfCouncil").val('');
    $('#FormsPH_txtCertificateNo').val('');
    $("#FormsPH_ddlResultCode").val("");
    $("#FormsPH_ddlState_Popup").selectedIndex = 0;
    $("#FormsPH_ddlBoard").selectedIndex = 0;
    if ($("#FormsPH_ddlQualificationType").val() != undefined) {


        if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "PHD" || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "M.PHILL") {

            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_trPHDReg").show();


            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").show();
            $("#FormsPH_otherUniversity").show();
            $("#FormsPH_otherResult").show();

            $("#FormsPH_TdNSubject").show();


            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);

            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();

            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();
            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblPercentageStar").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            // $("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_tdlblCourseDuration").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_trresulttype").hide();
            $("#FormsPH_trCGPA").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), false);
            //ValidatorEnable(document.getElementById('FormsPH_ReqCertificateNo'), false);

            IsResultPass();

        }
        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "NET/SLET/SET") {

            $("#FormsPH_lblResultDate").text($("#FormsPH_hdnlblResultDate").val());

            $("#FormsPH_tdlblCourseDuration").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_lblPercentage").hide();

            $("#FormsPH_trresulttype").hide();

            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResult").show();
            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_TdNSubject").show();

            $("#FormsPH_lbllikelyResultDate").hide();

            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblPercentageStar").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();

            //  $("#FormsPH_trMarks").hide();
            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);


        }
        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "PB") {


            $("#FormsPH_lblResultDate").text($("#FormsPH_lblResultDate").val());
            $("#FormsPH_tdlblISSNBN").show();
            $("#FormsPH_tdtxtISSNBN").show();
            $("#FormsPH_tdlblImpactIndex").show();
            $("#FormsPH_tdtxtImpactIndex").show();
            $("#FormsPH_trPubtype").show();
            $("#FormsPH_trFirstAuthor").show();
            $("#FormsPH_trYearOfPub").show();
            $("#FormsPH_trPublishedIn").show();
            $("#FormsPH_trTitlePaper").show();
            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_TdNSubject").show();


            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_tdlblCourseDuration").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").show();
            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();
            $("#FormsPH_lblNameofStandard").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);

        }
        else if ($("#FormsPH_ddlQualificationType").val() == "BookPub") {

            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_trpubtypenew").show();
            $("#FormsPH_trPubtype").show();
            $("#FormsPH_trFirstAuthor").show();
            $("#FormsPH_trYearOfPub").show();
            $("#FormsPH_trPublishedIn").show();
            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_TdNSubject").show();


            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), true);


            $("#FormsPH_tdlblISSNBN").hide();
            $("#FormsPH_tdtxtISSNBN").hide();
            $("#FormsPH_tdlblPublishedIn").hide();
            $("#FormsPH_tdddlPublishedIn").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            // $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_tdlblImpactIndex").hide();
            $("#FormsPH_tdtxtImpactIndex").hide();
            $("#FormsPH_tdddlIsFirstAuthor").hide();
            $("#FormsPH_tdIsFirstAuthor").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_tdlblCourseDuration").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
        }

        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "PH.D GUIDE") {


            $("#FormsPH_trPhdGuide1").show();
            $("#FormsPH_trPhdGuide2").show();

            document.getElementById('FormsPH_ReqDateOfRecognition').enabled = true;
            document.getElementById('FormsPH_ReqYrNoOfRegis4Research').enabled = true;
            document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch').enabled = true;
            document.getElementById('FormsPH_ReqNoOfAwardedPHD').enabled = true;

            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_TdNSubject").show();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_tdlblNoOfAwardedPG").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);

        }
        else if ($("#FormsPH_ddlQualificationType").val() == "ResearchPG") {


            $("#FormsPH_trPhdGuide1").show();
            $("#FormsPH_trPhdGuide2").show();
            $("#FormsPH_tdlblNoOfAwardedPG").show();
            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_TdNSubject").show();

            document.getElementById('FormsPH_ReqDateOfRecognition').enabled = true;
            document.getElementById('FormsPH_ReqYrNoOfRegis4Research').enabled = true;
            document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch').enabled = true;
            document.getElementById('FormsPH_ReqNoOfAwardedPHD').enabled = true;



            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_tdlblNoOfAwardedPHD").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            // $("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
        }
        else if ($("#FormsPH_ddlQualificationType").val() == "SponsoredProj") {

            $("#FormsPH_trSponsoredproject").show();



            $("#FormsPH_tdlblISSNBN").hide();
            $("#FormsPH_tdtxtISSNBN").hide();
            $("#FormsPH_tdlblPublishedIn").hide();
            $("#FormsPH_tdddlPublishedIn").hide();
            $("#FormsPH_tdlblImpactIndex").hide();
            $("#FormsPH_tdtxtImpactIndex").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_TdNSubject").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_tdlblSubject1").hide();
            // $("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);

        }



        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "CF") {//Added by Shamli for Certification

            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofCertification").val());

            $("#FormsPH_otherResult").show();
            $("#FormsPH_lblGrade").show();
            $("#FormsPH_txtGrade").show();
            //$("#FormsPH_trInstitute").show();

            $("#FormsPH_TdNSubject").show();

            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);

            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();
            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblPercentageStar").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();


            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);

        }
        else if ($("#FormsPH_ddlQualificationType").val() == "TrainingCourse") {

            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_trTrainingcourse").show();
            $("#FormsPH_trnooftraining").show();


            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), true);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), true);


            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_tdlblNoOfAwardedPHD").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_TdOtherDegree").hide();

            $("#FormsPH_TdNSubject").show();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            document.getElementById('FormsPH_ReqDateOfRecognition').enabled = false;
            document.getElementById('FormsPH_ReqYrNoOfRegis4Research').enabled = false;
            document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch').enabled = false;
            document.getElementById('FormsPH_ReqNoOfAwardedPHD').enabled = false;


        }
        else if ($("#FormsPH_ddlQualificationType").val() == "CONFSEMIWORK") {

            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_trparticipation").show();
            $("#FormsPH_trNoofSemiConfWork").show();

            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), true);


            $("#FormsPH_trTrainingcourse").hide();
            $("#FormsPH_trnooftraining").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();

            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_tdlblNoOfAwardedPHD").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_TdNSubject").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            // $("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            document.getElementById('FormsPH_ReqDateOfRecognition').enabled = false;
            document.getElementById('FormsPH_ReqYrNoOfRegis4Research').enabled = false;
            document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch').enabled = false;
            document.getElementById('FormsPH_ReqNoOfAwardedPHD').enabled = false;



        }
        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "BSSC") {//Added by Pradeep for BSSC

            $("#FormsPH_lblResultDate").text($("#FormsPH_lblResultDate").val());

            //alert('check');

            $("#FormsPH_TdNDegree").show();

            $("#FormsPH_otherState").show();
            $("#FormsPH_otherResultCode").show();
            $("#FormsPH_otherResult").show();
            $("#FormsPH_Trnameofschool").show();
            $("#FormsPH_lblNameofStandard").show();
            $("#FormsPH_TdNSubject").show();

            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), true);


            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            // $("#FormsPH_trMarks").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();
            $("#FormsPH_otherSubject").hide();
            //
            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();

            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);

            IsResultPass();


        }
        else if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "OTHER") {

            $("#FormsPH_otherSubject").show();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TxtOtherDegree").val('');
            $("#FormsPH_TxtOtherSubject").val('');
            $("#FormsPH_TdOtherDegree").show();
            $("#FormsPH_TdOtherSubject").show();

            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").show();
            $("#FormsPH_otherUniversity").show();
            $("#FormsPH_otherResult").show();


            $("#FormsPH_trOtherClass").show();
            $("#FormsPH_trOtherComOp").show();
            $("#FormsPH_lblAttempts").show();
            $("#FormsPH_txtAttempts").show();
            $("#FormsPH_lblAttemptsStar").show();

            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);


            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_TdNDegree").hide();
            $("#FormsPH_trMarks").hide();
            $("#FormsPH_TdNSubject").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblNameofStandard").hide();

            $("#FormsPH_TrPubNameOfJr").hide();
            $("#FormsPH_TrCouncil").hide();

            $("#FormsPH_tdlblSubject1").hide();
            //$("#FormsPH_TdddlSubject1").hide();
            $("#FormsPH_Subject2").hide();


            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);

            IsResultPass();


        }
        else {
            $("#FormsPH_lblResultDate").text($("#FormsPH_hdnResultDate").val());
            if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "G" || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "PG") {
                $("#FormsPH_TrCouncil").show();
            }
            else {
                $("#FormsPH_TrCouncil").hide();
            }

            $("#FormsPH_TdNSubject").show();
            $("#FormsPH_tdlblCourseDuration").show();
            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").show();
            $("#FormsPH_otherUniversity").show();
            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_otherResult").show();


            $("#FormsPH_trOtherClass").show();
            $("#FormsPH_trOtherComOp").show();
            $("#FormsPH_lblAttempts").show();
            $("#FormsPH_txtAttempts").show();
            $("#FormsPH_lblAttemptsStar").show();
            $("#FormsPH_trMarks").show();
            $("#FormsPH_trresulttype").show();
            $("#FormsPH_otherResultCode").show();


            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);
            ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), true);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), true);


            $("#FormsPH_trparticipation").hide();
            $("#FormsPH_trNoofSemiConfWork").hide();
            $("#FormsPH_trpubtypenew").hide();
            $("#FormsPH_trSponsoredproject").hide();
            $("#FormsPH_TdOtherSubject").hide();
            $("#FormsPH_TdOtherDegree").hide();
            $("#FormsPH_trPhdGuide1").hide();
            $("#FormsPH_trPhdGuide2").hide();

            $("#FormsPH_trPHDReg").hide();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();
            $("#FormsPH_lblGrade").hide();
            $("#FormsPH_txtGrade").hide();
            $("#FormsPH_Trnameofschool").hide();
            $("#FormsPH_lblNameofStandard").hide();
            $("#FormsPH_lblNameofDegree").text($("#FormsPH_HdnlblNameofDegree").val());
            $("#FormsPH_TrPubNameOfJr").hide();


            ValidatorEnable(document.getElementById('FormsPH_rfvddlpublishertype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtBookPeriodical'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddltypeofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtnoofproject'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlPublishedIn'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingtype'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTrainingduration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rvftxtnoofTrainings'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvddlTypeofparticipation'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfcddlLevel'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfvtxtNoofSemiConfWork'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDateOfRecognition'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqYrNoOfRegis4Research'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfSuccessfullyCompltResearch'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqNoOfAwardedPHD'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfSchool'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqOtherSubject'), false);
            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);

            IsResultPass();

        }
    }

    SetNameOfDegree();
    ResultTypeChange();
}

function SetNameOfDegree() {
    var val = $("#FormsPH_ddlNameOfDegree").val();
    var obj = $find("Board_CSD");

    $("#FormsPH_ddlState_Popup").val("");
    $("#FormsPH_ddlBoard").val("");
    $("#FormsPH_ddlResultCode").val("");

    if ($("#FormsPH_ddlNameOfDegree").val() == "B.Defence") {
        $("#FormsPH_tdlblCourseDuration").hide();
        $("#FormsPH_trresulttype").hide();
        ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), false);


    }
    else {
        $("#FormsPH_tdlblCourseDuration").show();
        $("#FormsPH_trresulttype").show();
        ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), true);
    }

    if ($("#FormsPH_ddlNameOfDegree").val() == "B.Sc" || ($("#FormsPH_ddlNameOfDegree").val() == "B.A-Arts")) {

        $("#FormsPH_lblSubject").text($("#FormsPH_hdnlblSubject1").val());
        $("#FormsPH_tdlblSubject1").show();
        // $("#FormsPH_TdddlSubject1").show();
        $("#FormsPH_Subject2").show();
        $("#FormsPH_otherSubject").show();
    }
    else {

        $("#FormsPH_tdlblSubject1").hide();
        // $("#FormsPH_TdddlSubject1").hide();
        $("#FormsPH_Subject2").hide();
        $("#FormsPH_otherSubject").hide();

        if (val == "SSC" || val == "HSC" || val == "AMIE" || val == "D.I.Engg" || val == "ITI" || val == "DIFMPHW"
            || val == "DIMMPHW" || val == "DIDawasaz" || val == "DIDTM" || val == "DIPHYSIO" || val == "DIMEDASS" || val == "DITTECH" || val == "DISAPH") {
            obj.set_contextKey(val);
        }
        else
            obj.set_contextKey("");
    }
}

function IsResultPass() {
    $("#FormsPH_txtResultDate").val("");
    $("#FormsPH_txtAttempts").val("");
    $("#FormsPH_ddlCourseDuration").val("");
    $("#FormsPH_ddlresulttype").val("");
    //$("#FormsPH_trQualCertificate").show();

    if ($("#FormsPH_ddlResultCode").val().toUpperCase() == "A") {


        $("#FormsPH_otherResult").show();
        $("#FormsPH_lbllikelyResultDate").show();
        $("#FormsPH_lblResultDate").hide();

        $("#FormsPH_txtPercentage").val("0");
        $("#FormsPH_lblAttemptsStar").hide();
        $("#FormsPH_lblCourseDurationStar").hide();
        $("#FormsPH_lblPercentageStar").hide();
        $("#FormsPH_lblResultDateStar").hide();
        $("#FormsPH_lblNameofStandard").hide();
        $("#FormsPH_lblResultDate").hide();
        $("#FormsPH_trresulttype").hide();

        $("#FormsPH_tdlbgrade").hide();

        $("#FormsPH_trMarks").hide();
        $("#FormsPH_lblPercentage").hide();

        $("#FormsPH_lblNormalizPercentage").hide();
        $("#FormsPH_trCGPA").hide();
        $("#FormsPH_trOtherClass").hide();

        //$("#FormsPH_trQualCertificate").hide();
        //$("#FormsPH_lbluploadCertificateStar").hide();

        ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), false);
        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), false);
        ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), false);
        //ValidatorEnable(document.getElementById('FormsPH_ReqCertificateNo'), false);

    }
    else if ($("#FormsPH_ddlResultCode").val().toUpperCase() == "P") {




        $("#FormsPH_tdlbgrade").show();

        $("#FormsPH_trMarks").show();
        $("#FormsPH_lblPercentage").show();

        $("#FormsPH_lblNormalizPercentage").hide();
        $("#FormsPH_trCGPA").show();
        $("#FormsPH_trresulttype").show();

        $("#FormsPH_txtPercentage").val("");
        $("#FormsPH_lblAttemptsStar").show();
        $("#FormsPH_lblCourseDurationStar").show();
        $("#FormsPH_lblPercentageStar").show();
        $("#FormsPH_lblResultDateStar").show();
        $("#FormsPH_otherResult").show();
        $("#FormsPH_lblResultDate").show();
        $("#FormsPH_lblResultDate").show();
        $("#FormsPH_lbllikelyResultDate").hide();
        $("#FormsPH_trOtherClass").hide();
        //$("#FormsPH_trQualCertificate").show();
        //$("#FormsPH_lbluploadCertificateStar").hide();

        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), true);
        ValidatorEnable(document.getElementById('FormsPH_rqvtxtCGPA'), true);
        ValidatorEnable(document.getElementById('FormsPH_rqvddlgrade'), true);
        ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), true);
        ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);
        ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), true);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
        ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
        ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
        ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        //ValidatorEnable(document.getElementById('FormsPH_ReqCertificateNo'), true);

        if ($("#FormsPH_ddlNameOfDegree").val().toUpperCase() == "M.D.S.") {
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            $("#FormsPH_txtPercentage").val("0");
            $("#FormsPH_lblPercentageStar").hide();
        }
        else if ($("#FormsPH_ddlNameOfDegree").val().toUpperCase() == "M.D." || $("#FormsPH_ddlNameOfDegree").val().toUpperCase() == "D.N.B." || $("#FormsPH_ddlNameOfDegree").val().toUpperCase() == "M.S." || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "BSSC") {
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);
            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);

            $("#FormsPH_txtPercentage").val("0");
            $("#FormsPH_lblAttemptsStar").hide();
            $("#FormsPH_lblCourseDurationStar").show();
            $("#FormsPH_lblPercentageStar").hide();

        }

        else
            if ($("#FormsPH_ddlQualificationType").val().toUpperCase() == "PHD" || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "M.PHILL" || $("#FormsPH_ddlQualificationType").val().toUpperCase() == "NET/SLET/SET") {
                ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
                ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
                ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
                ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
                ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
                ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);

                $("#FormsPH_txtPercentage").val("0");
                $("#FormsPH_lblAttemptsStar").hide();
                $("#FormsPH_lblCourseDurationStar").hide();
                $("#FormsPH_lblPercentageStar").hide();
                $("#FormsPH_lblResultDateStar").hide();
            }
        if ($("#FormsPH_ddlNameOfDegree").val() == "B.Defence") {
            $("#FormsPH_tdlblCourseDuration").hide();
            $("#FormsPH_trresulttype").hide();
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), false);


        }
        else {
            $("#FormsPH_tdlblCourseDuration").show();
            $("#FormsPH_trresulttype").show();
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), true);
            ValidatorEnable(document.getElementById('FormsPH_reqresulttype'), true);
        }
    }
    ResultTypeChange();
}


function SetOnQualificationType(QualType) {
    if (QualType != undefined) {

        if (QualType.toUpperCase() == "PHD" || QualType.toUpperCase() == "M.PHILL") {
            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();


            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();

            $("#FormsPH_trPHDReg").show();


            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").show();
            $("#FormsPH_otherUniversity").show();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").show();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();

            //            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            document.getElementById('FormsPH_rfv_NameOfDegree').enabled = true;
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            // ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), true);
            document.getElementById('FormsPH_rfv_Result0').enabled = false;

            $("#FormsPH_trMarks").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        }
        else if (QualType.toUpperCase() == "NET/SLET/SET") {
            $("#FormsPH_lblAttempts").hide();
            $("#FormsPH_txtAttempts").hide();
            $("#FormsPH_lblAttemptsStar").hide();


            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();

            $("#FormsPH_trPHDReg").show();




            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").show();

            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();

            //            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            document.getElementById('FormsPH_rfv_NameOfDegree').enabled = true;
            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            // ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), true);
            document.getElementById('FormsPH_rfv_Result0').enabled = false;

            $("#FormsPH_trMarks").show();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);
        }

        else if (QualType.toUpperCase() == "PB") {


            $("#FormsPH_tdlblISSNBN").show();
            $("#FormsPH_tdtxtISSNBN").show();
            $("#FormsPH_tdlblImpactIndex").show();
            $("#FormsPH_tdtxtImpactIndex").show();

            $("#FormsPH_TdNDegree").show();

            $("#FormsPH_otherSubject").hide();
            $("#FormsPH_otherState").hide();
            $("#FormsPH_otherUniversity").hide();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").hide();


            $("#FormsPH_trOtherClass").hide();
            $("#FormsPH_trOtherComOp").hide();

            $("#FormsPH_trPHDReg").hide();



            $("#FormsPH_trPubtype").show();
            $("#FormsPH_trFirstAuthor").show();
            $("#FormsPH_trYearOfPub").show();
            $("#FormsPH_trPublishedIn").show();
            $("#FormsPH_trTitlePaper").show();
            $("#FormsPH_trMarks").hide();

            ValidatorEnable(document.getElementById('FormsPH_Rfvmarks'), false);
            ValidatorEnable(document.getElementById('FormsPH_RFVmarksOutOf'), false);


            ValidatorEnable(document.getElementById('FormsPH_rfv_ResultDate0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Attemps0'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_CourseDuration'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), false);
            ValidatorEnable(document.getElementById('FormsPH_rfv_Result0'), false);
        }
        else {
            if ($("#FormsPH_ddlResultCode").val().toUpperCase() != "A") {
                document.getElementById('FormsPH_rfv_ResultDate0').enabled = true;
                document.getElementById('FormsPH_rfv_Attemps0').enabled = false;
                document.getElementById('FormsPH_rfv_Percentage').enabled = true;
                document.getElementById('FormsPH_rfv_CourseDuration').enabled = true;
                document.getElementById('FormsPH_rfv_Result0').enabled = false;


            }

            //ValidatorEnable(document.getElementById('FormsPH_rfv_NameOfDegree'), true);
            document.getElementById('FormsPH_rfv_NameOfDegree').enabled = true;

            $("#FormsPH_TdNDegree").show();
            $("#FormsPH_otherSubject").show();
            $("#FormsPH_otherState").show();
            $("#FormsPH_otherUniversity").show();
            $("#FormsPH_otherResultCode").hide();
            $("#FormsPH_otherResult").show();


            $("#FormsPH_trOtherClass").show();
            $("#FormsPH_trOtherComOp").show();

            $("#FormsPH_trPHDReg").hide();


            $("#FormsPH_trPubtype").hide();
            $("#FormsPH_trFirstAuthor").hide();
            $("#FormsPH_trYearOfPub").hide();
            $("#FormsPH_trPublishedIn").hide();
            $("#FormsPH_trTitlePaper").hide();

            $("#FormsPH_lblAttempts").show();
            $("#FormsPH_txtAttempts").show();
            $("#FormsPH_lblAttemptsStar").show();
        }

    }
}

function IsRTIOnEdit(RTItext) {
    var val = RTItext;
    var TRIdResearch1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdResearch1'));
    var TRIdResearch2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdResearch2'));

    var TRIdTeaching1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching1'));
    var TRIdTeaching2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching2'));
    var TRIdTeaching3 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching3'));
    var TRIdTeaching4 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdTeaching4'));

    var TRIdIndustry1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdIndustry1'));
    var TRIdIndustry2 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_IdIndustry2'));

    var LblSubject1 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_LblSubject1'));
    var LblSubject11 = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_LblSubject11'));

    //Clear Controls
    var TxtTitleOfProjrct = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtTitleOfProjrct'));
    var TxtNameandAddressOfCollege = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameandAddressOfCollege'));
    var txtNameofFundingEgency = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_txtNameofFundingEgency'));
    var txtAmountOfProject = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_txtAmountOfProject'));

    var ddllevel = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddllevel'));
    var Txtsubject = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_Txtsubject'));
    var TxtClass = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtClass'));
    var ddlApprovebyUniversity = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlApprovebyUniversity'));
    var TxtNameofCollege = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameofCollege'));
    var ddlApprovedBy = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlApprovedBy'));
    var TxtOther = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtOther'));

    var TxtNameofIndustry = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_TxtNameofIndustry'));
    var ddlIndustrySize = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlIndustrySize'));
    var ddlmanegerialPost = document.getElementById(obj.id.replace('FormsPH_NatureOfPost', 'FormsPH_ddlmanegerialPost'));

    if (val == "Research") {
        $("#FormsPH_IdResearch1").show();
        $("#FormsPH_IdResearch2").show();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();



        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), true);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);
    }
    else if (val == "Teaching") {
        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").show();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").show();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();


        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);
    }
    else if (val == "Industry") {
        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").show();
        $("#FormsPH_IdIndustry2").show();

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), true);
    }
    else {
        $("#FormsPH_IdResearch1").hide();
        $("#FormsPH_IdResearch2").hide();
        $("#FormsPH_IdTeaching1").hide();
        $("#FormsPH_IdTeaching2").hide();
        $("#FormsPH_IdTeaching3").hide();
        $("#FormsPH_IdTeaching4").hide();
        $("#FormsPH_IdIndustry1").hide();
        $("#FormsPH_IdIndustry2").hide();
        $("#FormsPH_LblSubject1").hide();
        $("#FormsPH_LblSubject11").hide();
        $("#FormsPH_Txtsubject").hide();

        //        TRIdResearch1.style.display = "none";
        //        TRIdResearch2.style.display = "none";
        //        TRIdTeaching1.style.display = "none";
        //        TRIdTeaching2.style.display = "none";
        //        TRIdTeaching3.style.display = "none";
        //        TRIdTeaching4.style.display = "none";
        //        TRIdIndustry1.style.display = "none";
        //        TRIdIndustry2.style.display = "none";

        ValidatorEnable(document.getElementById('FormsPH_ReqTitleOfProjrct'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameandAddressOfCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofFundingEgency'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqAmountOfProject'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqLevel'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqSubject'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqClass'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovebyUniversity'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqNameofCollege'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqApprovedBy'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqOther'), false);

        ValidatorEnable(document.getElementById('FormsPH_ReqNameofIndustry'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqIndustrySize'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqmanegerialPost'), false);
    }
    TxtTitleOfProjrct.value = "";
    TxtNameandAddressOfCollege.value = "";
    txtNameofFundingEgency.value = "";
    txtAmountOfProject.value = "";

    ddllevel.selectedIndex = 0;
    Txtsubject.value = "";
    TxtClass.value = "";
    ddlApprovebyUniversity.value = "";
    TxtNameofCollege.value = "";
    ddlApprovedBy.selectedIndex = 0;
    TxtOther.value = "";

    TxtNameofIndustry.value = "";
    ddlIndustrySize.selectedIndex = 0;
    ddlmanegerialPost.selectedIndex = 0;
}

function CheckYear(obj) {
    var val = $("#" + obj.id).val();
    if (parseFloat(val) > 50) {
        alert("Please enter proper year");
        $("#" + obj.id).val("");
    }

}

function CheckMonth(obj) {
    var val = $("#" + obj.id).val();
    if (parseFloat(val) > 12) {
        alert("Please enter proper months");
        $("#" + obj.id).val("");
    }

}

function CheckDays(obj) {
    var val = $("#" + obj.id).val();
    if (parseFloat(val) > 31) {
        alert("Please enter proper days");
        $("#" + obj.id).val("");
    }

}

function SalutationChange(obj) {
    var ddlSalutation;
    var ddlGender = $('#FormsPH_ddlGender');
    var ddlIsMarried = $('#FormsPH_ddlIsMarried');

    if (obj.id.indexOf('FormsPH_ddlSalutation') > -1) {
        ddlSalutation = obj.options[obj.selectedIndex].text;
        //ddlIsMarried = document.getElementById(obj.id.replace('FormsPH_ddlGender', 'FormsPH_ddlIsMarried')).value
    }

    ddlIsMarried.val("");

    if (ddlSalutation.toUpperCase() == "MS/MRS") {
        ddlGender.val("F");
    }
    else if (ddlSalutation.toUpperCase() == "SHRI") {
        ddlGender.val("M");
    }
    else if (ddlSalutation.toUpperCase() == "MR") {
        ddlGender.val("M");
    }
    else if (ddlSalutation.toUpperCase() == "MS") {
        ddlGender.val("F");
        //ddlIsMarried.val("N");
    }
    else if (ddlSalutation.toUpperCase() == "MRS") {
        ddlGender.val("F");
        //ddlIsMarried.val("Y");
    }
    else {
        ddlGender.val("");
    }
    //IsMarried(document.getElementById(obj.id.replace('FormsPH_ddlSalutation', 'FormsPH_ddlGender')));
    IsMalefemale(document.getElementById(obj.id.replace('FormsPH_ddlSalutation', 'FormsPH_ddlGender')));
}

function Fullname() {

    var TxtFirstName = $('#FormsPH_TxtFirstName').val();
    var txtspace = ' ';
    var TxtMiddleName = $('#FormsPH_TxtMiddleName').val();
    var TxtSurName = $('#FormsPH_TxtSurName').val();
    var txtName = TxtFirstName.concat(txtspace, TxtMiddleName, txtspace, TxtSurName);

    // document.getElementById("#FormsPH_txtName").text = txtName;
    $('#FormsPH_txtName').val(txtName);

}


function OnPhpercentage() {

    var Phpercentage = $('#FormsPH_txtPhpercentage').val();
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    if (Phpercentage < 40) {
        if (HdnLangid == 1) {
            alert('PH  Percentage should be greater than or Equal to 40');
        }
        else {
            alert('PH  Percentage should be greater than or Equal to 40');
        }
        $('#FormsPH_txtPhpercentage').val('');
        return false;
    }
    else if (Phpercentage > 100) {
        if (HdnLangid == 1) {
            alert('PH  Percentage should be Less than or Equal to 100');
        }
        else {
            alert('PH  Percentage should be Less than or Equal to 100');
        }
        $('#FormsPH_txtPhpercentage').val('');
        return false;
    }
    else {
        return true;
    }
}
function ontxtHeightChange(obj, n) {

    var Heightval = $('#FormsPH_TxtHeight').val();
    var Height = parseFloat(Heightval);
    var Weightval = $('#FormsPH_TxtWeight').val();
    var Weight = parseFloat(Weightval);
    var ChestDeflatedval = $('#FormsPH_TxtChestDeflated').val();
    var ChestDeflated = parseFloat(ChestDeflatedval);
    var ChestInflatedval = $('#FormsPH_TxtChestInflated').val();
    var ChestInflated = parseFloat(ChestInflatedval);


    if (n === 1) {

        if (Height <= 0) {
            alert('Height should be greater than 0');
            $('#FormsPH_TxtHeight').val('');
            return false;
        }
        else {
            return true;

        }
    }

    if (n === 2) {
        if (Weight <= 0) {
            alert('Weight should be greater than 0');
            $('#FormsPH_TxtWeight').val('');
            return false;
        }
        else {
            return true;

        }
    }

    if (n === 3) {
        if (ChestDeflated <= 0) {
            alert('Chest Deflated should be greater than 0');
            $('#FormsPH_TxtChestDeflated').val('');
            return false;
        }
        else {
            return true;

        }
    }

    if (n === 4) {
        if (ChestInflated <= 0) {
            alert('Chest Inflated should be greater than 0');
            $('#FormsPH_TxtChestInflated').val('');
            return false;
        }
        else {
            return true;

        }
    }


}



function ontxtAttemptCoureseDurationChange(obj, n) {
    var txtAttempts = $('#FormsPH_txtAttempts').val();
    var txtCourseDuration = $('#FormsPH_txtCourseDuration').val();

    if (n === 1) {
        if (txtAttempts <= 0) {
            alert('Attempts should be greater than 0');
            $('#FormsPH_txtAttempts').val('');
            return false;
        }
        else {
            return true;

        }
    }

    if (n === 2) {
        if (txtCourseDuration <= 0) {
            alert('Course Duration should be greater than 0');
            $('#FormsPH_txtCourseDuration').val('');
            return false;
        }
        else {
            return true;

        }
    }
}

function validateDateFormat(dtStr) {
    var year;
    var day;
    var month;
    var leap = 0;
    var valid = true;
    var oth_valid = true;
    var feb = false;
    var validDate = true;
    var Ret = true;

    if (dtStr != "" && dtStr != null) {
        year = dtStr.substr(6, 4);
        month = dtStr.substr(3, 2);
        day = dtStr.substr(0, 2);

        if (year == "0000" || year < 1900 || month == "00" || day == "00" || dtStr.length < 10) {
            validDate = false;
        }

        if (validDate == true) {
            leap = year % 4;

            if (month == "02") {
                feb = true;
            }


            if (leap == 0 && month == "02") {
                if (day > 29) {
                    valid = false;
                    feb = true;
                }
            }

            else if (month == "02" && day > 28) {
                valid = false;
                feb = true;
            }

            if (feb == false) {
                if (month == "03" || month == "01" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12") {
                    if (day > 31) {
                        oth_valid = false;
                    }
                }

                else if (month == "04" || month == 06 || month == "09" || month == "11") {
                    if (day > 30) {
                        oth_valid = false;
                    }
                }

                else {
                    oth_valid = false;
                }

            }
        }
    }

    if (valid == false || oth_valid == false || validDate == false) {
        Ret = false;
    }
    return Ret;
}
Date.prototype.getRealYear = function () {
    if (this.getFullYear)
        return this.getFullYear();
    else
        return this.getYear() + 1900;
};
function MOLCalculateAge(DOB) {
    var t_Return = 0


    if (DOB != '') {
        var now = new Date();

        var dob = DOB.split('/');
        var born = new Date(dob[2], dob[1] * 1 - 1, dob[0]);

        t_Return = now.getRealYear() - born.getRealYear();


        if (t_Return < 18) {

            alert("Please enter valid Date of Birth \n Age should be greater than or equal to 18 year.");
            return 0;
        } else {
            return t_Return;
        }

    }

    //return t_Return;
}



function DateFormatKPSC(keyCode, txt1) {
    // if (n == 1) {
    var isShift = false;
    var seperator = "/";
    var txt = txt1;

    //}
    if (keyCode == 16)
        isShift = true;        //Validate that its Numeric
    if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
        if ((txt.value.length == 2 || txt.value.length == 5) && keyCode != 8) {
            txt.value += seperator;
        }
        return true;
    }
    else {
        return false;
    }
}



function IsDomiciledNANo(obj) {

    var val = obj.value;
    var trIsDomiciled = document.getElementById('FormsPH_ddlDomiciledNo');

    var Permenantresidence = document.getElementById('FormsPH_ddlIsDomiciled').value;

    if (Permenantresidence == "Y") {
        if (val == "NotAvailable") {
            document.getElementById('FormsPH_ddlDomiciledNo').value = "Number";
            ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledPlace'), false);
            ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledNo'), false);
            return;
        }
    }

    if (val != "" && val == "N") {
        $("#FormsPH_txtDomiciledNo").val(val);
        $("#FormsPH_txtDomiciledNo").hide();

        $("#FormsPH_tdDomiciledPlace").hide();
        $("#FormsPH_ddlDomiciledPlace").hide();
        $("#FormsPH_TrIsDomiciledDate").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledPlace'), false);

        //$("#FormsPH_txtDomiciledNo").val('-');
        $("#FormsPH_ddlDomiciledPlace").val('0');
        $("#FormsPH_TxtDomiciledDate").val('');

        ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledNo'), false)
    }
    else {
        // $("#FormsPH_txtDomiciledNo").val('');
        $("#FormsPH_txtDomiciledNo").show();

        $("#FormsPH_tdDomiciledPlace").show();
        $("#FormsPH_ddlDomiciledPlace").show();
        $("#FormsPH_TrIsDomiciledDate").show();

        ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledPlace'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqDomiciledNo'), false);
    }
}

function FunAadhaarDisplay() {

    if ($("#FormsPH_DdlAadhaar").val() == "Y") {

        $("#FormsPH_TrAadhaarDetails").show();
        $("#FormsPH_TrIdentityDetails").hide();
        $("#FormsPH_TrADNoNote").hide();

        ValidatorEnable(document.getElementById('FormsPH_ReqFvAadhaarNo'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqFvAadhaarName'), true);
        ValidatorEnable(document.getElementById('FormsPH_revEnrolmentID'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqEnrolmentDate'), false);
        ValidatorEnable(document.getElementById('FormsPH_RevEnrolmentTime'), false);

        $("#FormsPH_txtEnrolmentID").val('');
        $("#FormsPH_txtEnrolmentTime").val('');
        $("#FormsPH_txtEnrolmentDate").val('');


    }
    else {
        $("#FormsPH_TrAadhaarDetails").hide();
        $("#FormsPH_TrIdentityDetails").show();
        $("#FormsPH_TrADNoNote").show();

        ValidatorEnable(document.getElementById('FormsPH_ReqFvAadhaarNo'), false);
        ValidatorEnable(document.getElementById('FormsPH_ReqFvAadhaarName'), false);
        ValidatorEnable(document.getElementById('FormsPH_revEnrolmentID'), true);
        ValidatorEnable(document.getElementById('FormsPH_ReqEnrolmentDate'), true);
        ValidatorEnable(document.getElementById('FormsPH_RevEnrolmentTime'), true);


        $("#TxtAadhaarName").val('');
        $("#FormsPH_TxtAadhaarName").val('');
        $("#FormsPH_TxtAadhaarNo").val('');

    }

}

function FunValidateAadhaarNo() {

    var UID = $("#TxtAadhaarNo").val();

    if (UID == undefined || UID == null || UID == "") {
        alert("Enter Aadhaar No.");
        $("#TxtAadhaarNo").val('');
        return false;
    }

    if (UID.length < 12) {
        alert("Enter 12 Digit valid Aadhaar No.");
        $("#TxtAadhaarNo").val('');
        return false;
    }

    if (Number(UID.charAt(0).trim()) == 0 || Number(UID.charAt(0).trim()) == 1) {
        alert("Enter valid Aadhaar No.");
        $("#TxtAadhaarNo").val('');
        return false;
    }

    //if (!UID.verhoeffCheck()) {
    //    alert("Enter valid Aadhaar No.");
    //    $("#TxtAadhaarNo").val('');
    //    return false;
    //}
}

function FunNoteChange(obj) {

    if ($("#FormsPH_ddlCaste").val() != null && $("#FormsPH_ddlCaste").val() != undefined && $("#FormsPH_ddlCaste").val() != "" && $("#FormsPH_ddlGender").val() != null && $("#FormsPH_ddlGender").val() != undefined && $("#FormsPH_ddlGender").val() != "") {

        var CategoryText = obj.options[obj.selectedIndex].text;

        if ($("#FormsPH_ddlGender").val() == "F" && CategoryText == "Open") {
            if ($("#FormsPH_hdnLangID").val() == "1") {
                $("#FormsPH_LblNCLNote").text('Note : For claiming OPEN Female reservation you need to have Maharashtra Domiciled Certificate');
                $("#FormsPH_LblDOMNote").text('Note : For claiming OPEN Female reservation you need to have Maharashtra Domiciled Certificate');
            }
            else {
                $("#FormsPH_LblNCLNote").text('टीप: ओपेन महिला आरक्षण का दावा करने के लिए आपको नॉनक्रिमिलेअर  परत प्रमाण पत्र की आवश्यकता है');
                $("#FormsPH_LblDOMNote").text('टीप: ओपेन महिला आरक्षण का दावा करने के लिए आपको नॉनक्रिमिलेअर  परत प्रमाण पत्र की आवश्यकता है');
            }
        }
        else {
            if ($("#FormsPH_hdnLangID").val() == "1") {
                $("#FormsPH_LblNCLNote").text('Note : You will not be considered for Reserved category post if you do not have Non-creamy Layer certificate');
                $("#FormsPH_LblDOMNote").text('Note : You will not be considered for Reserved category post if you do not have Maharashtra Domiciled certificate');
            }
            else {
                $("#FormsPH_LblNCLNote").text('टीप: यदि आपके पास नॉनक्रिमिलेअर प्रमाण पत्र नहीं है तो आपको आरक्षित श्रेणी पोस्ट के लिए नहीं माना जाएगा');
                $("#FormsPH_LblDOMNote").text('टीप: यदि आपके पास नॉनक्रिमिलेअर प्रमाण पत्र नहीं है तो आपको आरक्षित श्रेणी पोस्ट के लिए नहीं माना जाएगा');
            }
        }
    }
    else {
        if ($("#FormsPH_hdnLangID").val() == "1") {
            $("#FormsPH_LblNCLNote").text('Note : You will not be considered for Reserved category post if you do not have Non-creamy Layer certificate');
            $("#FormsPH_LblDOMNote").text('Note : You will not be considered for Reserved category post if you do not have Maharashtra Domiciled certificate');
        }
        else {
            $("#FormsPH_LblNCLNote").text('टीप: यदि आपके पास नॉनक्रिमिलेअर प्रमाण पत्र नहीं है तो आपको आरक्षित श्रेणी पोस्ट के लिए नहीं माना जाएगा');
            $("#FormsPH_LblDOMNote").text('टीप: यदि आपके पास नॉनक्रिमिलेअर प्रमाण पत्र नहीं है तो आपको आरक्षित श्रेणी पोस्ट के लिए नहीं माना जाएगा');
        }
    }

}

function FunNameValidation(LangID) {
    if (LangID == 1) {
        alert('Full name is mandatory.');
    }
    else {
        alert('Full name is mandatory.');
    }
}


function NewAllowCharOnly(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    }
}


function FunDateValidation(Obj) {

    var i;
    var i = Obj.parentElement.parentElement.rowIndex - 1;

    var FDate = $("[id*='FormsPH_rptSportsPersonDetails_txtFromDate_']");
    var TDate = $("[id*='FormsPH_rptSportsPersonDetails_txtToDate_']");
    var TDateREQFV = $("[id*='FormsPH_rptSportsPersonDetails_RequiredFieldValidator7_']");

    if (FDate != undefined && FDate != null && FDate != "" && TDate != undefined && TDate != null && TDate != "") {

        var From_Date = FDate[i].value;
        var To_Date = TDate[i].value;

        var From_Date = From_Date.split('/');
        var From_Date = new Date(From_Date[2], From_Date[1] * 1 - 1, From_Date[0]);

        var To_Date = To_Date.split('/');
        var To_Date = new Date(To_Date[2], To_Date[1] * 1 - 1, To_Date[0]);

        var Today = new Date();

        if (new Date(From_Date) > new Date(To_Date)) {
            alert('Period of Tournament From Should be less than Period of Tournament To');
            TDate[i].value = '';

            return false;
        }

        if (new Date(From_Date) > Today) {
            alert('Period of Tournament From Should be less than Todays Date');
            FDate[i].value = '';

            return false;
        }

        if (new Date(To_Date) > Today) {
            alert('Period of Tournament To Should be less than Todays Date');
            TDate[i].value = '';

            return false;
        }
    }
}


function FunKPSCPost() {

    var KPSCPOST = $("#FormsPH_ddlSelectedFromKPSC");

    if (KPSCPOST.val() == "Y") {
        $("#FormsPH_TxtKPSCPostName").val('');
        $("#FormsPH_TrKPSCPostName").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqKPSCPostName'), true);
    }
    else {
        $("#FormsPH_TxtKPSCPostName").val('');
        $("#FormsPH_TrKPSCPostName").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqKPSCPostName'), false);
    }
}



function FutureDateValiDation(obj) {
    var EnteredDate = obj.value; //for javascript
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    //    var EnteredDate = $("#txtdate").val(); // For JQuery

    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);

    var myDate = new Date(year, month - 1, date);

    var today = new Date();

    if (myDate > today) {
        if (HdnLangid == 1) {
            alert("Entered date is greater than today's date ");
        }
        else {
            alert("Entered date is greater than today's date ");
        }
        obj.value = "";
    }
    //    else {
    //        
    //    }
}

function IssuedateValiduptodatevalidation(obj) {
    var EnteredDate = obj.value; //for javascript
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    //    var EnteredDate = $("#txtdate").val(); // For JQuery

    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);
    var myDate = new Date(year, month - 1, date);

    var Issuedate = $("#FormsPH_txtCastCertificateIssuingDate").val();

    var date1 = Issuedate.substring(0, 2);
    var month1 = Issuedate.substring(3, 5);
    var year1 = Issuedate.substring(6, 10);

    var Issuedate1 = new Date(year1, month1 - 1, date1);

    if (myDate < Issuedate1) {
        if (HdnLangid == 1) {
            alert("Entered date is less than Issuing Date");
        }
        else {
            alert("Entered date is less than Issuing Date");
        }
        obj.value = "";
    }
    //    else {
    //        
    //    }
}
function FutureDateAllowedValiDation(obj) {
    var EnteredDate = obj.value; //for javascript
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    //    var EnteredDate = $("#txtdate").val(); // For JQuery

    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);

    var myDate = new Date(year, month - 1, date);

    var today = new Date();

    if (myDate < today) {
        if (HdnLangid == 1) {
            alert("Entered date is less than today's date ");
        }
        else {
            alert("Entered date is less than today's date ");
        }
        obj.value = "";
    }
    //    else {
    //        
    //    }
}
function FutureDateValiDation1(obj) {
    var EnteredDate = obj.value; //for javascript

    //    var EnteredDate = $("#txtdate").val(); // For JQuery
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);

    var myDate = new Date(year, month - 1, date);

    // var today = new Date();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var newtoday = new Date(yyyy, mm - 1, dd);

    if (newtoday <= myDate) {
        //alert("Entered date is Greater or Equal to today's date");
    }
    else {
        if (HdnLangid == 1) {
            alert("Valid upto date must be greater than Issueing date AND greater than or equal to today's date ");
        } else {
            alert("Valid upto date must be greater than Issueing date AND greater than or equal to today's date ")
        }
        obj.value = "";
        return false;

    }

}

function FutureDateValiDationafter3year(obj) {
    var EnteredDate = obj.value; //for javascript
    var HdnLangid = $("#FormsPH_hdnLangID").val();

    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);
    var myDate = new Date(year, month - 1, date);

    var today = new Date();

    if (myDate > today) {
        if (HdnLangid == 1) {
            alert("Entered date is greater than today's date ");
        }
        else {
            alert("Entered date is greater than today's date ");
        }
        obj.value = "";
    }

    var yearnew = year++;
    var yearnew1 = yearnew + 3;
    var LastDay = new Date(yearnew1, month, 0);
    var LastDaymonth = ('0' + (LastDay.getMonth() + 1)).slice(-2);
    var LastDaydate = ('0' + LastDay.getDate()).slice(-2);
    var LastDayyear = LastDay.getFullYear();
    var lastDate = LastDaydate + '/' + LastDaymonth + '/' + LastDayyear;
    document.getElementById("FormsPH_txtGovEmpExchRegupto").value = lastDate;
}
function FutureDateValiDationafter3year1(obj) {
    var EnteredDate = obj.value; //for javascript
    var HdnLangid = $("#FormsPH_hdnLangID").val();

    var date = EnteredDate.substring(0, 2);
    var month = EnteredDate.substring(3, 5);
    var year = EnteredDate.substring(6, 10);
    var myDate = new Date(year, month - 1, date);

    var today = new Date();

    if (myDate > today) {
        if (HdnLangid == 1) {
            alert("Entered date is greater than today's date ");
        }
        else {
            alert("Entered date is greater than today's date ");
        }
        obj.value = "";
    }
    var yearnew = year++;
    var yearnew1 = yearnew + 3;
    var LastDay = new Date(yearnew1, month, 0);
    var LastDaymonth = ('0' + (LastDay.getMonth() + 1)).slice(-2);
    var LastDaydate = ('0' + LastDay.getDate()).slice(-2);
    var LastDayyear = LastDay.getFullYear();
    var lastDate = LastDaydate + '/' + LastDaymonth + '/' + LastDayyear;

    document.getElementById("FormsPH_txtSolderWelfareEmpExchRegiUptodate").value = lastDate;
}
function validation3year(obj) {

    var UptoDate = obj.value;
    var date = UptoDate.substring(0, 2);
    var month = UptoDate.substring(3, 5);
    var year = UptoDate.substring(6, 10);
    var txtGovEmpExchRegDate = document.getElementById('FormsPH_txtGovEmpExchRegDate').value;
    var date = txtGovEmpExchRegDate.substring(0, 2);
    var month = txtGovEmpExchRegDate.substring(3, 5);
    var year1 = txtGovEmpExchRegDate.substring(6, 10);
    var HdnLangid = $("#FormsPH_hdnLangID").val();

    var yearnew = year1++;
    var yearnew1 = yearnew + 3;

    if (yearnew1 <= year) {
        //alert("Entered date is Greater or Equal to today's date");
    }
    else {
        if (HdnLangid == 1) {
            alert("Year should not be less than 3 years from the date of registration");
        }
        else {
            alert("Year should not be less than 3 years from the date of registration");

        }
        obj.value = "";
        return false;
    }

}
function validation3year1(obj) {

    var UptoDate = obj.value;
    var date = UptoDate.substring(0, 2);
    var month = UptoDate.substring(3, 5);
    var year = UptoDate.substring(6, 10);
    var txtGovEmpExchRegDate = document.getElementById('FormsPH_txtSolderWelfareEmpExchRegiDate').value;
    var date = txtGovEmpExchRegDate.substring(0, 2);
    var month = txtGovEmpExchRegDate.substring(3, 5);
    var year1 = txtGovEmpExchRegDate.substring(6, 10);
    var HdnLangid = $("#FormsPH_hdnLangID").val();

    var yearnew = year1++;
    var yearnew1 = yearnew + 3;

    if (yearnew1 <= year) {
        //alert("Entered date is Greater or Equal to today's date");
    }
    else {
        if (HdnLangid == 1) {
            alert("Year should not be less than 3 years from the date of registration");
        } else {
            alert("Year should not be less than 3 years from the date of registration");
        }
        obj.value = "";
        return false;
    }

}

function IssueUptodateValiDation() {

    var txtGovEmpExchRegDate = document.getElementById('FormsPH_txtGovEmpExchRegDate').value;

    var txtGovEmpExchRegupto = document.getElementById('FormsPH_txtGovEmpExchRegupto').value;
    var date = txtGovEmpExchRegDate.substring(0, 2);
    var month = txtGovEmpExchRegDate.substring(3, 5);
    var year = txtGovEmpExchRegDate.substring(6, 10);
    var date1 = txtGovEmpExchRegupto.substring(0, 2);
    var month1 = txtGovEmpExchRegupto.substring(3, 5);
    var year1 = txtGovEmpExchRegupto.substring(6, 10);

    var RegDate = new Date(year, month - 1, date);
    var Regupto = new Date(year1, month1 - 1, date1);

    if (Regupto <= RegDate) {
        $('#FormsPH_txtGovEmpExchRegupto').val('');
        alert("Entered date is less than Date of Registration");

    }
}

function CompairDateValiDation() {


    var txtPHIssueDate = document.getElementById('FormsPH_txtIssueDate').value;
    var txtPHUptoDate = document.getElementById('FormsPH_txtUptoDate').value;
    var txtCertificateBPLIssuingDate = document.getElementById('FormsPH_txtCertificateBPLIssuingDate').value;
    var txttxtCertificateBPLUptpdate = document.getElementById('FormsPH_txttxtCertificateBPLUptpdate').value;
    var txtNonCreamyLayerCertiDate = document.getElementById('FormsPH_txtNonCreamyLayerCertiDate').value;
    var txtnoncremuptodate = document.getElementById('FormsPH_txtnoncremuptodate').value;


    if (txtPHIssueDate <= txtPHUptoDate) {
        $('#FormsPH_txtUptoDate').val('');
        alert("Entered date is less than Issue date ");



    }
    else if (txtCertificateBPLIssuingDate <= txttxtCertificateBPLUptpdate) {
        $('#FormsPH_txttxtCertificateBPLUptpdate').val('');
        alert("Entered date is less than Issue date ");


    }
    else if (txtNonCreamyLayerCertiDate <= txtnoncremuptodate) {
        $('#FormsPH_txtnoncremuptodate').val('');
        alert("Entered date is less than Issue date ");
    }


    //$('#FormsPH_txtIssueDate').val('');
    //$('#FormsPH_txtUptoDate').val('');
    //$('#FormsPH_txtCertificateBPLIssuingDate').val('');
    //$('#FormsPH_txttxtCertificateBPLUptpdate').val('');
    //$('#FormsPH_txtNonCreamyLayerCertiDate').val('');


}




function FunSpNote() {
    if ($("#FormsPH_DdlSpNote").val() == "Y") {
        $("#FormsPH_TrSpVerDtAdg").show();
        $("#FormsPH_TrSPVerRepNo").show();
        document.getElementById('FormsPH_ReqSpVerDtAdg').enabled = true;

    }
    else {
        $("#FormsPH_TrSpVerDtAdg").hide();
        $("#FormsPH_TrSPVerRepNo").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqSpVerDtAdg'), false);
        $("#FormsPH_TxtSpVerDtAdg").val('');
        $("#FormsPH_TxtSPVerRepNo").val('');
        $("#FormsPH_TxtSPVerRepDt").val('');
    }
}

function FunOtherCouncil(obj) {
    var val = obj.options[obj.selectedIndex].value;
    if (val == "OC") {
        $("#FormsPH_TxtOtherCouncil").show();
        ValidatorEnable(document.getElementById('FormsPH_ReqOtherCouncil'), true);
    }
    else {
        $("#FormsPH_TxtOtherCouncil").hide();
        ValidatorEnable(document.getElementById('FormsPH_ReqOtherCouncil'), false);
    }
}
function ClearPercentageCalculation() {
    $('#FormsPH_txtPercentage').val('');
    $('#FormsPH_txtmarks').val('');
    $('#FormsPH_TxtOutOf').val('');
    $('#FormsPH_txtAttempts').val('');
    $('#FormsPH_txtResultDate').val('');
    $('#FormsPH_txtmarks').focus();
}

function ontxtPercentageCalculation(strObj) {

    var Percentage;
    var HdnLangid = $("#FormsPH_hdnLangID").val();
    if ($('#FormsPH_txtmarks').val() == '' || $('#FormsPH_TxtOutOf').val() == '') {
        $('#FormsPH_txtPercentage').val('');
        return false;
    }
    if (strObj == 'Marks') {
        if ($('#FormsPH_txtmarks').val() == '' || $('#FormsPH_txtmarks').val() == '0') {
            if (HdnLangid == 1) {
                alert("Marks Obtained should be greater than 0.");
            } else {
                alert('Marks Obtained should be greater than 0.');
            }
            ClearPercentageCalculation();
            return false;
        }
    }
    if (strObj == 'OutOf') {
        if ($('#FormsPH_TxtOutOf').val() == '' || $('#FormsPH_TxtOutOf').val() == '0') {
            if (HdnLangid == 1) {
                alert("Marks Out of should be greater than 0.");
            } else {
                alert('Marks Out of should be greater than 0.');
            }
            ClearPercentageCalculation();
            return false;
        }
    }

    if ($('#FormsPH_txtmarks').val() == '' || $('#FormsPH_TxtOutOf').val() == '' || (parseInt($('#FormsPH_txtmarks').val()) > parseInt($('#FormsPH_TxtOutOf').val()))) {
        ClearPercentageCalculation();
        if (HdnLangid == 1) {
            alert("Marks Obtained should be less than or equal to Out of marks.");
        } else {
            alert('Marks Obtained should be less than or equal to Out of marks.');
        }
        return false;
    }

    var Marks = parseInt($('#FormsPH_txtmarks').val());
    var Outof = parseInt($('#FormsPH_TxtOutOf').val());


    if (Marks != 0 || Outof != 0) {
        Percentage = ((Marks * 100) / Outof);
        Percentage = Percentage.toFixed(2);
    }
    var Attempts = 1;
    if (Attempts == 1) {
        $('#FormsPH_txtPercentage').val(Percentage);
    }
    else {
        if (Percentage <= 35) {
            $('#FormsPH_txtPercentage').val(Percentage);
        }
        else {
            $('#FormsPH_txtPercentage').val('35');
        }
    }

    if ($('#FormsPH_txtPercentage').val().length > 0 && $('#FormsPH_ddlresulttype').val() == 'M') {

        $('#FormsPH_txtPercentage').attr("disabled", true);
        //ValidatorEnable(document.getElementById('FormsPH_rfv_Percentage'), false);
    }
    else {
        $('#FormsPH_txtPercentage').attr("disabled", false);
    }

}


function ontxtmarks() {

    $('#FormsPH_txtPercentage').val('');
    //$('#FormsPH_txtAttempts').val('');
    //$('#FormsPH_txtResultDate').val('');
    $('#FormsPH_ddlClass').val('');
    //$('#FormsPH_txtCompulsorySubjects').val('');
    //$('#FormsPH_txtOptionalSubjects').val('');




}

