import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pdf-generation';
  overallComplianceTrendData;
  whiteListColumns;
  columnWidths = {"Title": 2, "Severity": 1, "Resources Passed": 0.8, "Compliance %": 0.8, "Status": 0.8};

  ngOnInit(): void {
    this.overallComplianceTrendData = this.massageTrendGraphData2([]);
    this.whiteListColumns = Object.keys(this.columnWidths);
  }

  massageTrendGraphData2(graphData){
    const start = new Date(2021, 0, 1), end = new Date(2022, 11, 11);
    for(let i=0; i<100; i++){
      graphData.push({
        date: new Date(+start + Math.random() * (+end - +start)),
        compliance: 0
      })
    }

    let keys = Object.keys(graphData[0]);
    keys.splice(keys.indexOf("date"), 1);
    let data = [];
    keys.forEach(key => {
      data.push({"key": key, "values":[], "isZeroGraph": true});
    })

    

    for(let i=0; i<data.length; i++){
        graphData.forEach((e, j) => {
          // const value = Math.round(e[data[i].key]["compliance_percent"]);
          const max = 100, min = 0;
          const value = Math.floor(Math.random()*(max-min)) + min;
          if(value!=0 && data[i]["isZeroGraph"]){
            data[i]["isZeroGraph"] = false;
          }
        data[i].values.push({
            'date':new Date(e.date),
            'value':value,
            'zero-value':value==0
        });
      })   
      data[i].values.sort(function(a,b){
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
      }

      // remove zeroGraphs
      // data = data.filter(item => !item["isZeroGraph"]);      
    return data;
  }

  percentBySeverityStackedBarGraphData = {
    categories: ['one', 'two', 'three', 'four'],
    data: [
    {
      name: "Passed Assets",
      data: [44, 30, 20, 1]
    }, {
      name: "Failed Assets",
      data: [56, 70, 80, 99]
    }
  ],
  colors: ['#6AAA75', '#D95140'],
      isHorizontal: true,
      isStacktypePercent:true,
      errorMessage: '',
      bar: {
        borderRadius: 10
      }
  };

  tableData = [
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "AWS_IAM_Role_Full_Admin_Privilege_version-1_Admin_Previlege_iamrole",
            "valueText": "AWS_IAM_Role_Full_Admin_Privilege_version-1_Admin_Previlege_iamrole",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "IAM roles should not have customer managed policies with full administrative privileges",
            "valueText": "IAM roles should not have customer managed policies with full administrative privileges",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Detach the customer managed or inline policy to revoke the administrative privileges.",
            "valueText": "Detach the customer managed or inline policy to revoke the administrative privileges.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "IAM roles with customer managed policies or inline policies that allow full \"*:*\" administrative privileges should not be attached to the role",
            "valueText": "IAM roles with customer managed policies or inline policies that allow full \"*:*\" administrative privileges should not be attached to the role",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "iamrole",
            "valueText": "iamrole",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 97,
                    "compliant": 97
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 97,
                    "compliant": 97
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 97,
            "valueText": 97,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 97,
            "valueText": 97,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "97/97",
            "valueText": "97/97",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AWS_user_permissions_without_group_version-1_user_policy_via_group_iamuser",
            "valueText": "AWS_user_permissions_without_group_version-1_user_policy_via_group_iamuser",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Permissions should be assigned through groups",
            "valueText": "Permissions should be assigned through groups",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create an IAM group and attach policies and add user.Detach the policy from user",
            "valueText": "Create an IAM group and attach policies and add user.Detach the policy from user",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "To ensure the principle of least privilege, provide permissions to IAM users only though IAM group",
            "valueText": "To ensure the principle of least privilege, provide permissions to IAM users only though IAM group",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "iamuser",
            "valueText": "iamuser",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 15,
                    "compliant": 15
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 15,
                    "compliant": 15
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 15,
            "valueText": 15,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 15,
            "valueText": 15,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "15/15",
            "valueText": "15/15",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "RemoveRootUserAccessKey_version-1_RemoveRootUserAccessKey_account",
            "valueText": "RemoveRootUserAccessKey_version-1_RemoveRootUserAccessKey_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Remove access keys associated with the root user",
            "valueText": "Remove access keys associated with the root user",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Delete Account access keys for Root user",
            "valueText": "Delete Account access keys for Root user",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Checking access keys associated with the root user account are removed",
            "valueText": "Checking access keys associated with the root user account are removed",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "1/1",
            "valueText": "1/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AWS_rootaccount_hardware_MFA_version-1_enable_harware_mfa_account",
            "valueText": "AWS_rootaccount_hardware_MFA_version-1_enable_harware_mfa_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Hardware MFA should be enabled for root account",
            "valueText": "Hardware MFA should be enabled for root account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Install and configure a hardware MFA device for the root account.",
            "valueText": "Install and configure a hardware MFA device for the root account.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Enable hardware MFA(Multi-Factor Authentication) for root account to secure access to AWS resources",
            "valueText": "Enable hardware MFA(Multi-Factor Authentication) for root account to secure access to AWS resources",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "high",
            "imgSrc": "violations-high-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "1/1",
            "valueText": "1/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "IamPasswordPolicy_version-1_IamPasswordPolicy_account",
            "valueText": "IamPasswordPolicy_version-1_IamPasswordPolicy_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "IamPasswordPolicy",
            "valueText": "IamPasswordPolicy",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Log into your AWS console,Go to the IAM service,On the left menu select Password Policy which should be the bottom option,Set the Minimum Password Length form field to 12 (or higher) and Select each of the checkboxes so that all four required  complexity options are selected,Depending on your corporate policy you may wish to allow users to change their own passwords,We recommend that you permit users to do so,Apply your new password policy and you have satisfied this security remediation",
            "valueText": "Log into your AWS console,Go to the IAM service,On the left menu select Password Policy which should be the bottom option,Set the Minimum Password Length form field to 12 (or higher) and Select each of the checkboxes so that all four required  complexity options are selected,Depending on your corporate policy you may wish to allow users to change their own passwords,We recommend that you permit users to do so,Apply your new password policy and you have satisfied this security remediation",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Enforce a strong password policy on IAM console authentications. By default AWS does not configure the maximal strength password complexity policy on your behalf.",
            "valueText": "Enforce a strong password policy on IAM console authentications. By default AWS does not configure the maximal strength password complexity policy on your behalf.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": null,
            "valueText": null,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "1/1",
            "valueText": "1/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": null,
            "valueText": null,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AWS_Support_Access_Role_version-1_Support_Access_account",
            "valueText": "AWS_Support_Access_Role_version-1_Support_Access_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Support role should be created for the AWS support incidents",
            "valueText": "Support role should be created for the AWS support incidents",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "If there is no role created, then create a separate support role and attach the policy to the role. Users or group should use this role for support access.",
            "valueText": "If there is no role created, then create a separate support role and attach the policy to the role. Users or group should use this role for support access.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Create a dedicated support role to manage incidents with AWS Support",
            "valueText": "Create a dedicated support role to manage incidents with AWS Support",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "1/1",
            "valueText": "1/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "IamUserWithMultipleAccessKey_version-1_IAMUserShouldUseSingleKey_iamuser",
            "valueText": "IamUserWithMultipleAccessKey_version-1_IAMUserShouldUseSingleKey_iamuser",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS IAM user should have single access key",
            "valueText": "AWS IAM user should have single access key",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Update to make the key inactive or delete the access keys which are no longer used.",
            "valueText": "Update to make the key inactive or delete the access keys which are no longer used.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Ensure there is only one active access key available for any single IAM user",
            "valueText": "Ensure there is only one active access key available for any single IAM user",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "iamuser",
            "valueText": "iamuser",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 15,
                    "compliant": 14
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 15,
                    "compliant": 14
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 15,
            "valueText": 15,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 14,
            "valueText": 14,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "14/15",
            "valueText": "14/15",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 93,
            "valueText": 93,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AWS_ACM_Certificate_Expired_version-1_AWS_ACM_Certificate_Expired",
            "valueText": "AWS_ACM_Certificate_Expired_version-1_AWS_ACM_Certificate_Expired",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS_ACM_Certificate_Expired",
            "valueText": "AWS_ACM_Certificate_Expired",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Remove all the expired Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates managed by AWS Certificate Manager.",
            "valueText": "Remove all the expired Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates managed by AWS Certificate Manager.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Ensure expired SSL/TLS certificates are removed from AWS Certificate Manager (ACM).",
            "valueText": "Ensure expired SSL/TLS certificates are removed from AWS Certificate Manager (ACM).",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "acmcertificate",
            "valueText": "acmcertificate",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "IAM_Aws",
            "valueText": "IAM_Aws",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 5,
                    "compliant": 5
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 5,
                    "compliant": 5
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 5,
            "valueText": 5,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 5,
            "valueText": 5,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "5/5",
            "valueText": "5/5",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "Logging",
            "valueText": "Logging",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "Aws_DocumentDB_should_be_encrypted_with_kms_cmks_version-1_aws_enable_cluster_kms_cmks_encryption_documentdb",
            "valueText": "Aws_DocumentDB_should_be_encrypted_with_kms_cmks_version-1_aws_enable_cluster_kms_cmks_encryption_documentdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "aws_document_db_cluster_kms_cmks_encryption_should_be_enabled",
            "valueText": "aws_document_db_cluster_kms_cmks_encryption_should_be_enabled",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create KMS Customer Master Key.Create a snapshot of the unencrypted cluster.Restore the snapshot and enable encryption  with the new CMK. Then add instances to the new cluster.",
            "valueText": "Create KMS Customer Master Key.Create a snapshot of the unencrypted cluster.Restore the snapshot and enable encryption  with the new CMK. Then add instances to the new cluster.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Ensure that Amazon DocumentDB clusters are encrypted with KMS Customer Master Keys (CMKs).",
            "valueText": "Ensure that Amazon DocumentDB clusters are encrypted with KMS Customer Master Keys (CMKs).",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "documentdb",
            "valueText": "documentdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Logging",
            "valueText": "Logging",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "high",
            "imgSrc": "violations-high-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "S3ObjectLevelWriteLogging_version-1_ObjectLevelWriteLogging_s3",
            "valueText": "S3ObjectLevelWriteLogging_version-1_ObjectLevelWriteLogging_s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "S3 object level write operations should be logged",
            "valueText": "S3 object level write operations should be logged",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Configure Object-level logging for S3 bucket write events",
            "valueText": "Configure Object-level logging for S3 bucket write events",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Enabling object-level logging will help you meet data compliance requirements within your organization, perform comprehensive security analysis, monitor specific patterns of user behavior in your AWS account",
            "valueText": "Enabling object-level logging will help you meet data compliance requirements within your organization, perform comprehensive security analysis, monitor specific patterns of user behavior in your AWS account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "s3",
            "valueText": "s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Logging",
            "valueText": "Logging",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 56,
            "valueText": 56,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/56",
            "valueText": "0/56",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "S3ObjectLevelReadLogging_version-1_ObjectLevelReadLogging_s3",
            "valueText": "S3ObjectLevelReadLogging_version-1_ObjectLevelReadLogging_s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "S3 object level read operations should be logged",
            "valueText": "S3 object level read operations should be logged",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Configure Object-level logging for S3 bucket read events",
            "valueText": "Configure Object-level logging for S3 bucket read events",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Enabling object-level logging will help you meet data compliance requirements within your organization, perform comprehensive security analysis, monitor specific patterns of user behavior in your AWS account",
            "valueText": "Enabling object-level logging will help you meet data compliance requirements within your organization, perform comprehensive security analysis, monitor specific patterns of user behavior in your AWS account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "s3",
            "valueText": "s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Logging",
            "valueText": "Logging",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 56,
            "valueText": 56,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/56",
            "valueText": "0/56",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForIAMPolicyChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForIAMPolicyChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "IAM policy changes should have log metric filter and alarm",
            "valueText": "IAM policy changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for IAM policy changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for IAM policy changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to IAM policies will help ensure authentication and authorization controls remain intact.",
            "valueText": "Monitoring changes to IAM policies will help ensure authentication and authorization controls remain intact.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForCustomerCMK_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForCustomerCMK_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Disabling or scheduled deletion of customer created CMKs should have log metric filter and alarm",
            "valueText": "Disabling or scheduled deletion of customer created CMKs should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for disabling or scheduled deletion of customer created CMKs",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for disabling or scheduled deletion of customer created CMKs",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Create Amazon CloudWatch alarms for AWS KMS Customer Master Keys so that it will help you prevent any accidental or intentional modifications that may lead to unprotected data access or other security breaches.",
            "valueText": "Create Amazon CloudWatch alarms for AWS KMS Customer Master Keys so that it will help you prevent any accidental or intentional modifications that may lead to unprotected data access or other security breaches.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "NaclPublicAccessPort_version-1_NACLWithPublicAccessForPort22_networkacl",
            "valueText": "NaclPublicAccessPort_version-1_NACLWithPublicAccessForPort22_networkacl",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Network ACL should not allow public access to administration server port 22",
            "valueText": "Network ACL should not allow public access to administration server port 22",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Update or delete the inbound rules to deny the unrestricted inbound traffic",
            "valueText": "Update or delete the inbound rules to deny the unrestricted inbound traffic",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Network ACL should not allow public access to administration server ports",
            "valueText": "Network ACL should not allow public access to administration server ports",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "networkacl",
            "valueText": "networkacl",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "high",
            "imgSrc": "violations-high-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 22,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 22,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 22,
            "valueText": 22,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/22",
            "valueText": "0/22",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForRouteTableChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForRouteTableChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Route table changes should have log metric filter and alarm",
            "valueText": "Route table changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for route table changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for route table changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to route tables will help ensure that all VPC traffic flows through an expected path.",
            "valueText": "Monitoring changes to route tables will help ensure that all VPC traffic flows through an expected path.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForNetworkGatewayChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForNetworkGatewayChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Changes to network gateways  should have log metric filter and alarm",
            "valueText": "Changes to network gateways  should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for changes to network gateways",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for changes to network gateways",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to network gateways will help ensure that all ingress egress traffic traverses the VPC border via a controlled path.",
            "valueText": "Monitoring changes to network gateways will help ensure that all ingress egress traffic traverses the VPC border via a controlled path.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AWS_account_security_hub_exists_version-1_enable_security_hub_account",
            "valueText": "AWS_account_security_hub_exists_version-1_enable_security_hub_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS Security hub should be enabled",
            "valueText": "AWS Security hub should be enabled",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Grant the permissions required to enable Security Hub, attach the Security Hub managed policy AWSSecurityHubFullAccess to an IAM user, group, or role.",
            "valueText": "Grant the permissions required to enable Security Hub, attach the Security Hub managed policy AWSSecurityHubFullAccess to an IAM user, group, or role.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Security Hub collects security data from across AWS accounts, services, and supported third-party partner products and helps you analyze your security trends and identify the highest priority security issues.",
            "valueText": "Security Hub collects security data from across AWS accounts, services, and supported third-party partner products and helps you analyze your security trends and identify the highest priority security issues.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 1
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "1/1",
            "valueText": "1/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForAWSOrganizationChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForAWSOrganizationChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS Organizations changes should have log metric filter and alarm",
            "valueText": "AWS Organizations changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Organizations changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Organizations changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring AWS Organizations changes can help you prevent any unwanted, accidental or intentional modifications that may lead to unauthorized access or other security breaches.",
            "valueText": "Monitoring AWS Organizations changes can help you prevent any unwanted, accidental or intentional modifications that may lead to unauthorized access or other security breaches.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForUnAuthorizedAPI_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForUnAuthorizedAPI_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Unauthorized API calls should have log metric filter and alarm",
            "valueText": "Unauthorized API calls should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for unauthorized API calls",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for unauthorized API calls",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring unauthorized API calls will help reveal application errors and may reduce time to detect malicious activity",
            "valueText": "Monitoring unauthorized API calls will help reveal application errors and may reduce time to detect malicious activity",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForManagementConsoleAuthenticationFailures_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForManagementConsoleAuthenticationFailures_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS Management Console authentication failures should have log metric filter and alarm",
            "valueText": "AWS Management Console authentication failures should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Management Console authentication failures",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Management Console authentication failures",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring failed console logins may decrease lead time to detect an attempt to brute force a credential, which may provide an indicator, such as source IP, that can be used in other event correlation.",
            "valueText": "Monitoring failed console logins may decrease lead time to detect an attempt to brute force a credential, which may provide an indicator, such as source IP, that can be used in other event correlation.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "SGWithAnywhereAccess_version-1_SgWithAnywhereAccess_sg",
            "valueText": "SGWithAnywhereAccess_version-1_SgWithAnywhereAccess_sg",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "SgWithAnywhereAccess",
            "valueText": "SgWithAnywhereAccess",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Edit the security groups and allow only specific IP ranges and ports",
            "valueText": "Edit the security groups and allow only specific IP ranges and ports",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "It is best practice to allows required ip ranges and specific port in the security groups that will be used for securing EC2 instances in private subnets.",
            "valueText": "It is best practice to allows required ip ranges and specific port in the security groups that will be used for securing EC2 instances in private subnets.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "sg",
            "valueText": "sg",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": null,
            "valueText": null,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 70,
                    "compliant": 30
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 70,
                    "compliant": 30
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 70,
            "valueText": 70,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 30,
            "valueText": 30,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "30/70",
            "valueText": "30/70",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 43,
            "valueText": 43,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "warn",
            "valueText": "Warn",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "warn"
        },
        "category2": {
            "text": null,
            "valueText": null,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForVPCChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForVPCChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "VPC changes should have log metric filter and alarm",
            "valueText": "VPC changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for VPC changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for VPC changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to VPC will help ensure VPC traffic flow is not getting impacted.",
            "valueText": "Monitoring changes to VPC will help ensure VPC traffic flow is not getting impacted.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForManagementConsoleSignin_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForManagementConsoleSignin_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Management Console sign-in without MFA should have log metric filter and alarm",
            "valueText": "Management Console sign-in without MFA should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for Management Console sign-in without MFA",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for Management Console sign-in without MFA",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring for single-factor console logins will increase visibility into accounts that are not protected by MFA.",
            "valueText": "Monitoring for single-factor console logins will increase visibility into accounts that are not protected by MFA.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForS3BucketPolicy_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForS3BucketPolicy_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "S3 bucket policy changes should have log metric filter and alarm",
            "valueText": "S3 bucket policy changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for S3 bucket policy changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for S3 bucket policy changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to S3 bucket policies may reduce time to detect and correct permissive policies on sensitive S3 buckets.",
            "valueText": "Monitoring changes to S3 bucket policies may reduce time to detect and correct permissive policies on sensitive S3 buckets.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForNACLChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForNACLChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Changes to NACL should have log metric filter and alarm",
            "valueText": "Changes to NACL should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for changes to NACL",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for changes to NACL",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to NACLs will help ensure that AWS resources and services are not unintentionally exposed.",
            "valueText": "Monitoring changes to NACLs will help ensure that AWS resources and services are not unintentionally exposed.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForCloudTrailConfigurationChanges_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForCloudTrailConfigurationChanges_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Log metric filter and alarm should be enabled for CloudTrail configuration changes",
            "valueText": "Log metric filter and alarm should be enabled for CloudTrail configuration changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for CloudTrail configuration changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for CloudTrail configuration changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to CloudTrails configuration will help ensure sustained visibility to activities performed in the AWS account",
            "valueText": "Monitoring changes to CloudTrails configuration will help ensure sustained visibility to activities performed in the AWS account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForRootAccountUsage_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForRootAccountUsage_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Usage of root account should have log metric filter and alarm",
            "valueText": "Usage of root account should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for usage of root account",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for usage of root account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring for root account logins will provide visibility into the use of a fully privileged account and an opportunity to reduce the use of it.",
            "valueText": "Monitoring for root account logins will provide visibility into the use of a fully privileged account and an opportunity to reduce the use of it.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "AccountEnsureCloudwatchAlarmExistsForAWSConfiguration_version-1_EnableCloudwatchAlarm_account",
            "valueText": "AccountEnsureCloudwatchAlarmExistsForAWSConfiguration_version-1_EnableCloudwatchAlarm_account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AWS Config configuration changes should have log metric filter and alarm",
            "valueText": "AWS Config configuration changes should have log metric filter and alarm",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Config configuration changes",
            "valueText": "Create CloudWatch Logs Metric Filter and corresponding alarm for AWS Config configuration changes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Monitoring changes to AWS Config configuration will help ensure sustained visibility of configuration items within the AWS account.",
            "valueText": "Monitoring changes to AWS Config configuration will help ensure sustained visibility of configuration items within the AWS account.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "account",
            "valueText": "account",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Monitoring",
            "valueText": "Monitoring",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 1,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 1,
            "valueText": 1,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/1",
            "valueText": "0/1",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "Storage",
            "valueText": "Storage",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "RDSDBEnableAutoMinorVersionUpgrade_version-1_EnableAutoMinorVersionUpgrade_rdsdb",
            "valueText": "RDSDBEnableAutoMinorVersionUpgrade_version-1_EnableAutoMinorVersionUpgrade_rdsdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "RDS Auto Minor Version UpgradeRDS Auto Minor Version Upgrade should be enabled",
            "valueText": "RDS Auto Minor Version UpgradeRDS Auto Minor Version Upgrade should be enabled",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "If the DB instances have not enabled the flag for auto minor version upgrade.",
            "valueText": "If the DB instances have not enabled the flag for auto minor version upgrade.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "RDS database instances should have the Auto Minor Version Upgrade flag enabled to receive minor engine upgrades automatically.",
            "valueText": "RDS database instances should have the Auto Minor Version Upgrade flag enabled to receive minor engine upgrades automatically.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "rdsdb",
            "valueText": "rdsdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Storage.RDS",
            "valueText": "Storage.RDS",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 5,
                    "compliant": 5
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 5,
                    "compliant": 5
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 5,
            "valueText": 5,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 5,
            "valueText": 5,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "5/5",
            "valueText": "5/5",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 100,
            "valueText": 100,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "S3MFADeleteEnabled_version-1_MFADeleteEnabled_s3",
            "valueText": "S3MFADeleteEnabled_version-1_MFADeleteEnabled_s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "MFA delete should be enabled on S3 bucket",
            "valueText": "MFA delete should be enabled on S3 bucket",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Enable MFA Delete on S3 Bucket",
            "valueText": "Enable MFA Delete on S3 Bucket",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Enable MFA Delete on S3 buckets",
            "valueText": "Enable MFA Delete on S3 buckets",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "s3",
            "valueText": "s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Storage.S3",
            "valueText": "Storage.S3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "low",
            "imgSrc": "violations-low-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 56,
                    "compliant": 0
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 56,
            "valueText": 56,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "0/56",
            "valueText": "0/56",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 0,
            "valueText": 0,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "S3BucketAllowHTTPRequest_version-1_S3BucketAllowHTTPRequest_s3",
            "valueText": "S3BucketAllowHTTPRequest_version-1_S3BucketAllowHTTPRequest_s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "S3 bucket policy to deny HTTP requests",
            "valueText": "S3 bucket policy to deny HTTP requests",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Create a bucket policy that explicitly denies access when SecureTransport:false",
            "valueText": "Create a bucket policy that explicitly denies access when SecureTransport:false",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Set S3 Bucket Policy to deny HTTP requests",
            "valueText": "Set S3 Bucket Policy to deny HTTP requests",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "s3",
            "valueText": "s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Storage.S3",
            "valueText": "Storage.S3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "high",
            "imgSrc": "violations-high-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 56,
                    "compliant": 13
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 56,
                    "compliant": 13
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 56,
            "valueText": 56,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 13,
            "valueText": 13,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "13/56",
            "valueText": "13/56",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 23,
            "valueText": 23,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "fail",
            "valueText": "Fail",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "text": "S3BucketEncryption_version-1_S3BucketWithoutEncryption_s3",
            "valueText": "S3BucketEncryption_version-1_S3BucketWithoutEncryption_s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "All S3 buckets should employ encryption-at-rest",
            "valueText": "All S3 buckets should employ encryption-at-rest",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Enable encryption for S3 buckets",
            "valueText": "Enable encryption for S3 buckets",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Encrypt all the s3 buckets at rest to protect the sensitive contents",
            "valueText": "Encrypt all the s3 buckets at rest to protect the sensitive contents",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "s3",
            "valueText": "s3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Storage.S3",
            "valueText": "Storage.S3",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "high",
            "imgSrc": "violations-high-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 56,
                    "compliant": 52
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 56,
                    "compliant": 52
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 56,
            "valueText": 56,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 52,
            "valueText": 52,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "52/56",
            "valueText": "52/56",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 93,
            "valueText": 93,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "Security",
            "valueText": "Security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "AWSRdsUnencryptedPublicInstances_version-1_AwsRdsUnencryptedPublicAccess_rdsdb",
            "valueText": "AWSRdsUnencryptedPublicInstances_version-1_AwsRdsUnencryptedPublicAccess_rdsdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "AwsRdsUnencryptedPublicAccess",
            "valueText": "AwsRdsUnencryptedPublicAccess",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Ensure to terminate any publicly accessible rds instances or update the instance with storage encryption enabled.",
            "valueText": "Ensure to terminate any publicly accessible rds instances or update the instance with storage encryption enabled.",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Terminate all unencrypted or publicly available RDS upon creation",
            "valueText": "Terminate all unencrypted or publicly available RDS upon creation",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "rdsdb",
            "valueText": "rdsdb",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Security",
            "valueText": "Security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "critical",
            "imgSrc": "violations-critical-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "text": {
                "500559730414": {
                    "total": 5,
                    "compliant": 4
                }
            },
            "valueText": {
                "500559730414": {
                    "total": 5,
                    "compliant": 4
                }
            },
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "text": 5,
            "valueText": 5,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "text": 4,
            "valueText": 4,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "text": "4/5",
            "valueText": "4/5",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "text": 80,
            "valueText": 80,
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "text": "pass",
            "valueText": "Pass",
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "success"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    },
    {
        "Policy ID": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Title": {
            "text": "Aws Networking",
            "valueText": "Aws Networking",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true,
            "isGroupHeading": true
        },
        "resolution": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "policyDesc": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Asset Type": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Category": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Severity": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "Status": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        },
        "category2": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "isGroupHeading": true
        }
    },
    {
        "Policy ID": {
            "text": "Network_Security_Group_Flow_Log_retention_more_than_90_days",
            "valueText": "Network_Security_Group_Flow_Log_retention_more_than_90_days",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Title": {
            "text": "Enforce Network Security Group Flow Log retention for more than 90 days",
            "valueText": "Enforce Network Security Group Flow Log retention for more than 90 days",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": true
        },
        "resolution": {
            "text": "Enable Rentention and Retention days should be Greater than or equal to 90 days for NSG log flow",
            "valueText": "Enable Rentention and Retention days should be Greater than or equal to 90 days for NSG log flow",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "policyDesc": {
            "text": "Ensure that your Microsoft Azure Network Security Groups (NSGs) have a sufficient flow log retention period, i.e. greater than or equal to 90 days, configured for reliability and compliance purposes",
            "valueText": "Ensure that your Microsoft Azure Network Security Groups (NSGs) have a sufficient flow log retention period, i.e. greater than or equal to 90 days, configured for reliability and compliance purposes",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Asset Type": {
            "text": "nsg",
            "valueText": "nsg",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Category": {
            "text": "Aws Networking",
            "valueText": "Aws Networking",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Severity": {
            "text": "",
            "valueText": "medium",
            "imgSrc": "violations-medium-icon",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "By Account": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalChecks": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "totalCompliant": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Resources Passed": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Compliance %": {
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        },
        "Status": {
            "isChip": true,
            "isMenuBtn": false,
            "properties": "",
            "link": false,
            "chipVariant": "error"
        },
        "category2": {
            "text": "",
            "valueText": "security",
            "imgSrc": "category-security",
            "isChip": "",
            "isMenuBtn": false,
            "properties": "",
            "link": false
        }
    }
]
}
