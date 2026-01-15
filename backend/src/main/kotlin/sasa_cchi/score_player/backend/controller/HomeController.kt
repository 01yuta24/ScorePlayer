package sasa_cchi.score_player.backend

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController{
    @GetMapping("/")
    fun getHomePage():String = "/index.html"
}
