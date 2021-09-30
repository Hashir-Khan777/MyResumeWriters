var generalHelper = {

    errorHandler: function (messages) {
        var erros = "";
        $.each(messages, function (index, value) {
            erros += value + "\n";
        });
        swal("Ooopss..!", erros, "error");
    },
    redirectToNextPage: function (formType, packageSku) {

        
        if (formType == "ordernow_form") {
            let sku = packageSku.split('_');
            if (sku.length && sku[0] == 'LOGO') {
                window.location = "/../order/logo_brief";
            } else if (sku.length && sku[0] == 'WEB') {
                window.location = "/../order/web_brief";
            } else {
                window.location = "/../order/payment";
            }
        } 
        else {
            window.location = "/../order/thankyou";
        }
        
        
    },
    redirectToNextPagelp: function (formType, packageSku) {

       
    }

};