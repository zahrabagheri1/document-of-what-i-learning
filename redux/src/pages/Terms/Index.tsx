import { List, ListItem, Typography } from "@mui/material"


interface TermsPageProps {

}

const TermsPage: React.FC<TermsPageProps> = (): JSX.Element => {
    return (
        <>
            <Typography>جلاتوهاوسی عزیز جهت استفاده بهینه از خدمات کاربردی سایت و سرویس‌دهی در شأن شما مشتری عزیز لطفا پیش از ثبت سفارش موارد زیر را مطالعه نمایید:</Typography>
            <List>
                <ListItem>ثبت نام و سفارش آنلاین از مجموعه جلاتوهاوس به معنای آگاه بودن و پذیرفتن شرایط و قوانین است</ListItem>
                <ListItem>هنگام سفارش، ثبت یک شماره موبایل معتبر و قابل دسترس لازم است.</ListItem>
                <ListItem>هنگامی که مجموعه، سفارش شما را دریافت کرد ممکن است از طریق تلفن با شما تماس گرفته شود؛ در صورت عدم پاسخگویی، امکان رد سفارش شما وجود خواهد داشت.</ListItem>
                <ListItem>زمانی که سفارش ثبت و تایید می گردد، به هیچ وجه امکان لغو و کنسلی آن وجود ندارد. با توجه به این که تمام آیتم‌ها شامل مواد غذایی می باشند که به دلیل مسائل بهداشتی امکان عودت آنها وجود ندارد، لذا به هیچ وجه و تحت هیچ شرایطی (حتی عدم تحویل سفارش از جانب مشتری) سفارش و وجه مربوط به آن مسترد نخواهد شد.</ListItem>
                <ListItem>ا توجه به استفاده جلاتوهاوس از سرویس های پیک اینترنتی، در صورت اشتباه وارد شدن آدرس و لوکیشن (پین آدرس روی نقشه) ممکن است سفارش به مسیر دیگری حمل و تحویل شود و یا سفارش مذکور حتی پس از تایید اولیه، لغو گردد. لذا عواقب و هزینه های ناشی از این اشتباه به عهده مشتری خواهد بود.</ListItem>
                <ListItem>با توجه به اینکه پرداخت آنلاین از طریق درگاه های معتبر بانکی انجام می شود در صورت مشکل یا اختلال در سیستم بانکی، وجه پرداختی طبق روال های بانکی و صرفا از طریق بانک عامل مسترد خواهد شد.</ListItem>
                <ListItem>مسئولیت وارد کردن اطلاعات اشتباه از قبیل نام و نام خانوادگی، آدرس، شماره تماس و ... به عهده کاربر است. در صورت وارد کردن اطلاعات اشتباه و به موجب آن هر گونه وقفه و یا کنسلی در تحویل سفارش، هزینه سفارش و ارسال آن غیر قابل بازگشت خواهد بود.</ListItem>
                <ListItem>سفارشاتی که بصورت "تحویل حضوری" ثبت می شوند به هیچ وجه با پیک قابل ارسال نخواهند بود. مجموعه مجاز است با توجه به احتمال افت کیفیت آیتمها در طول مسیر، از تحویل این نوع سفارشات به پیک مشتری ممانعت و کل سفارش را کنسل نماید. همچنین اشتباهاتی نظیر مغایرت احتمالی آیتمها با فاکتور ثبت شده، تماما بعهده مشتری می باشد.</ListItem>
                <ListItem>سفارشاتی که به مقصد بیمارستانها، مراکز خرید و مکانهای عمومی مشابه ارسال می گردد، صرفا درب ورودی لوکیشن قابل تحویل است. پیک مجموعه مجاز به ورود به مکانهای عمومی و تحویل سفارش در طبقات نمی باشد. لذا درخواست مشتری برای تحویل سفارش در طبقات امکانپذیر نبوده و متعاقبا سفارش کنسل و عواقب ناشی از آن به عهدهٔ مشتری خواهد بود.</ListItem>
                <ListItem>چنانچه کاربر در حین سفارش در آدرسی که مشخص کرده است حضور نداشته باشد سفارش به هیچ عنوان به محل دیگری غیر از آدرس مشخص شده در فاکتور تحویل داده نخواهد شد و مسئولیت تمامی مشکلاتی که از این طریق پیش خواهد آمد بر عهده کاربر خواهد بود.</ListItem>
                <ListItem>برای همیاری با مجموعهٔ جلاتوهاوس، جهت تداوم خدمت رسانی، با توجه به شرایط حاکم و تذکر کتبی ادارهٔ اماکن، برای جلوگیری از پلمپ مجموعه لطفا نسبت به رعایت قوانین جاری در مورد نوع پوشش همکاری بفرمایید!</ListItem>
            </List>
            <Typography>همه‌ی قوانین تا زمانی که در سایت جلاتو هاوس نمایش داده میشوند معتبر هستند. در هر بازدید شما، این امکان وجود دارد که این قوانین اصلاح و یا به روز شده باشند. لذا توصیه می شود برای هر بار استفاده از وب سایت مجددا قوانین سایت را مطالعه نمایید.</Typography>
        </>



    )
}

export default TermsPage
