function ajaxRequest(settings) {
    var retData;
    $.ajax(settings).done(function (response) {
        retData = response;
    });
    return retData;
}

function getWebData() {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/conferencedata/getwebdata",
        "method": "GET",
        "async": false,
        "timeout": 0
    };
    return ajaxRequest(settings);
}

function getSSSMainCategories() {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/public/SssMainCategories", //https://imy.alo170.gov.tr/api/Statistic/SssMainCategories (eski url)
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        },
    };
    return ajaxRequest(settings);
}


function getSSSSubCategories(mainCategoryId) {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/public/SssSubCategories?mainCategoryId=" + mainCategoryId, // https://imy.alo170.gov.tr/api/Statistic/SssSubCategories?mainCategoryId
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        },
    };
    return ajaxRequest(settings);
}


function getSSSSubCategoryContent(subCategoryId) {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/public/Sss?subCategoryId=" + subCategoryId, //  https://imy.alo170.gov.tr/api/Statistic/Sss?subCategoryId
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        },
    };
    return ajaxRequest(settings);
}


function postNotificationCheck(data) {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/public/BasvuruDurum",
        "method": "POST",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data)
    };
    return $.ajax(settings);
}


// bildirim sebepleri
function reasons(isUnknown) {
    var settings = {
        "url": `https://imy.alo170.gov.tr/api/public/reasons?isUnknown=${isUnknown}`,
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        }
    };
    return ajaxRequest(settings);
}

// projeler (kurumlar)
function projects() {
    var settings = {
        "url": "https://imy.alo170.gov.tr/api/public/projects",
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        }
    };
    return ajaxRequest(settings);
}

function subjects(projectId, isUnknown) {
    var settings = {
        "url": `https://imy.alo170.gov.tr/api/public/subjects?projectId=${projectId}&isUnknown=${isUnknown}`,
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        }
    };
    return ajaxRequest(settings);
}

function subSubjects(subjectId) {
    var settings = {
        "url": `https://imy.alo170.gov.tr/api/public/subsubjects?subjectId=${subjectId}`,
        "method": "GET",
        "async": false,
        "timeout": 0,
        "headers": {
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        }
    };
    return ajaxRequest(settings);
}

function postNotice(data) {
    var settings = {
        "url": `https://imy.alo170.gov.tr/api/public/addform`,
        "method": "POST",
        "async": false,
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "X-Imy-Sign": "FpzVGxSSmVWbFVRVEZPUkUweFQwUkNiRTlVWkd4Tk1rWm9Ua1JKZUZwRVZYcGFiVlV6VG1wVk0wMVVWWGRPUjAxNVRsUkZNQT09"
        },
        "data": JSON.stringify(data)
    };
    return $.ajax(settings);
}