import Route from '@ember/routing/route';
import { camelize } from '@ember/string';
import $ from 'jquery';

export default Route.extend({
    model(){
        return $.getJSON("http://localhost:8181/com.shalahuddin.api/anggota/getAll").then(function(json){
            if(json.info.status==200){
                return json.content;
            }else{
                this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
            }
        });
    },
    keyForAttribute(attr) {
        return camelize(attr);
    }

});
