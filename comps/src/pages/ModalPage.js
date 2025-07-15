import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
                    <p>Ayo agree to dis</p>
                </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal &&  modal}
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
            <p>Qapla. Dah tlhingan hol mu ghom a dalegh.  Qawhaqvam chenmohlu di wiqipe diya ohvad ponglu.  Ach jinmolvamvad Saghbe law tlhingan hol, dis, oh mevmohlu.  Ach dis jar wa mahcha dich wikia jinmoldaq vihta.  Hov lengvad chenmohlu tlhingan hol e ej dah oh ghojtah ghot law.  Qapbej holvam wicha meh, qawhaqvam chenmohlu .  Tahjaj wo, tahjaj hol Sov qawhaq tlhab oh ej ghitlhmey diqonmeh tlhingan hol wilo.  Ghitlhmey chenmohlah ej chohlah tlhingan hol jatlhlahbogh hoch ghotpu e.  Wej tin Sov qawhaqvam, ach ghurli e witul.  Dah ghitlhmey ngas.  Vay daghel danehchugh, vaj tachdaq maghom.</p>
        </div>
        );
}

export default ModalPage;