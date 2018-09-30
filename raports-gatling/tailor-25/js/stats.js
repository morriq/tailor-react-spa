var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "750",
        "ok": "154",
        "ko": "596"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "55040",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "50576",
        "ok": "14085",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "20485",
        "ok": "19187",
        "ko": "3"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "4206",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "8916",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "54612",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "54936",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 150,
        "percentage": 20
    },
    "group4": {
        "name": "failed",
        "count": 596,
        "percentage": 79
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "1.711",
        "ko": "6.622"
    }
},
contents: {
"req_openapplication-11d62": {
        type: "REQUEST",
        name: "OpenApplication",
path: "OpenApplication",
pathFormatted: "req_openapplication-11d62",
stats: {
    "name": "OpenApplication",
    "numberOfRequests": {
        "total": "750",
        "ok": "154",
        "ko": "596"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "55040",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "50576",
        "ok": "14085",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "20485",
        "ok": "19187",
        "ko": "3"
    },
    "percentiles1": {
        "total": "60003",
        "ok": "4206",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "8916",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "54612",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "54936",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 150,
        "percentage": 20
    },
    "group4": {
        "name": "failed",
        "count": 596,
        "percentage": 79
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "1.711",
        "ko": "6.622"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}