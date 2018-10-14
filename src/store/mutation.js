export default{
    change(state,data){
        state.city = data;
        try
        {
            localStorage.city = data;
        }
        catch(e){}
    }
}