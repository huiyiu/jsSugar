/*******************************************************************************
 * 以下为针对“复选框”的操作
 ******************************************************************************/

/**
 * 选中/取消所有复选框
 * 
 * @param checkboxName
 *            复选框名称
 * @param allCheckboxObj
 *            全选复选框对象
 */
function checkAllOrNot(checkboxName, allCheckboxObj) {
    allCheckboxObj.blur();
    $(":checkbox[name='" + checkboxName + "']").each(function() {
        if (allCheckboxObj.checked != this.checked) {
            this.click();
        }
    });

}
/**
 * 选中某条记录，则此行样式为选中，否则去掉选中
 * 
 * @param obj
 *            复选框对象，此对象应包含在
 *            <td></td>
 *            中
 */
function checkboxCssChange(obj,allCheckboxName) {
    obj.blur();
    var isChecked = $(obj).attr("checked");
    if (isChecked) {
        $(obj.parentNode.parentNode).addClass("selected");
        var checkedLen = $(":checkbox:checked[name='" + obj.name + "']").length;
        var checkboxLen = $(":checkbox[name='" + obj.name + "']").length;
        if(checkedLen == checkboxLen){
        	$("#"+allCheckboxName).attr("checked",true);
        }
    } else {
        $(obj.parentNode.parentNode).removeClass("selected");
        $("#"+allCheckboxName).removeAttr("checked");
    }
}

/**
 * 选中一组复选框的个数
 * 
 * @param checkboxName
 *            复选框的名称
 * @returns 选中复选框的个数
 */
function checkedCheckboxCount(checkboxName) {
    return $(":checkbox:checked[name='" + checkboxName + "']").length;
}

/**
 * 得到一组选中的复选框的value值，用半角逗号隔开
 * 
 * @param checkboxName
 *            复选框名称
 * @returns 选中的复选框的value串
 */
function getCheckedCheckboxValue(checkboxName) {
    if (checkedCheckboxCount(checkboxName) > 0) {
        var checkedValues = new Array();
        $(":checkbox:checked[name='" + checkboxName + "']").each(function() {
            checkedValues.push(this.value);
        });
        return checkedValues.join(",");
    } else {
        return "";
    }
}